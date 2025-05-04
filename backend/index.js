import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcrypt'; // Adicionando bcrypt para hash de senhas

const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;

// Conexão com MongoDB (melhor organizar em um arquivo separado)
mongoose.connect('mongodb+srv://aura-botanica:Dayane1997@contatos.dcdkg7a.mongodb.net/?retryWrites=true&w=majority&appName=contatos')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro na conexão com MongoDB:', err));

// Modelo de Usuário melhorado
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Senha deve ser string e hasheada
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

// Rotas
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); // Excluindo senha do retorno
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Validação básica
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    
    // Verificar se usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email já cadastrado' });
    }
    
    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();
    res.status(201).json({ 
      _id: user._id,
      name: user.name,
      email: user.email
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Adicione outras rotas conforme necessário (login, atualização, etc.)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));