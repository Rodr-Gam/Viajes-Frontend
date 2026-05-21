import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import useAuthStore, { ROLES } from '../store/authStore';

function Login() {
    const navigate  = useNavigate();
    const { setUser } = useAuthStore();

    const [form, setForm]       = useState({ email: '', password: '' });
    const [error, setError]     = useState(null);
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const data = await login(form.email, form.password);

            // Guardamos el usuario en el estado global
            setUser(data.user);

            // Redirigimos según el rol
            if (data.user.role_id === ROLES.ADMIN) {
                navigate('/admin');
            } else {
                navigate('/mi-cuenta');
            }

        } catch (err) {
            // Mostramos el mensaje de error que manda el backend
            const msg = err.response?.data?.message ?? 'Credenciales incorrectas';
            setError(msg);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container mt-5" style={{ maxWidth: 400 }}>
            <h2 className="mb-4">Iniciar sesión</h2>

            {error && (
                <div className="alert alert-danger">{error}</div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                >
                    {loading ? 'Entrando...' : 'Entrar'}
                </button>
            </form>
        </div>
    );
}

export default Login;
