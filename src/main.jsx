import '@fortawesome/fontawesome-free/css/all.min.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import x from './compontents/Routering/AppRouter'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
 import './index.css'

createRoot(document.getElementById('root')).render(
<RouterProvider  router={x}/>
)
