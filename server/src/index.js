import express from 'express';
import morgan from 'morgan';
import empleadosRoutes from './routes/empleados.routes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', empleadosRoutes);

app.set('port', 4000);
app.listen(app.get('port'), () =>{
  console.log('Servidor en el puerto', app.get('port'));
});