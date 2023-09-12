import express from 'express';
import routes from './Routes/api/imagesRoute';

const app = express();
const port = 8000;
const host = 'localhost';

app.use('/api',routes);

app.listen(port,listening);
function listening(){
    console.log(`server running on localhost: ${port}`);
    console.log(`Server is running on http://${host}:${port}`);
} 
export default app;
