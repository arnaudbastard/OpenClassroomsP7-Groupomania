// import des modules necessaires
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRouter from '@/pages/Public/PublicRouter';
import AuthRouter from './pages/Auth/AuthRouter';
import Error from '@/_utils/Error'

import AuthGuard from '@/_helpers/AuthGuard'

import Layout from '@/pages/Layout'


// creation du routage principal
function App() {

    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<AuthRouter />} />
                        <Route path="auth/*" element={<AuthRouter />} />
                    </Route>
                    <Route element={<Layout />}>
                        <Route path="/*" element={
                            <AuthGuard>
                                <PublicRouter />
                            </AuthGuard>} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

// export de la fonction app pour appel dans l'index
export default App;
