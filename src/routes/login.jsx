import { useState } from "react";

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleLogin = async () => {
        setError(null);
        setSuccess(null);
        try {
            const raw = { email, password };
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(raw),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || `HTTP error! Status: ${response.status}`);
            }

            localStorage.setItem("token", result?.token);
            setSuccess("Login successful! Redirecting...");
            setTimeout(() => {
                window.location.href = "/";
            }, 1000);
        } catch (error) {
            console.error("Error:", error);
            setError(error.message);
        }
    };

    const handleRegister = async () => {
        setError(null);
        setSuccess(null);
        try {
            const raw = { name, email, password };
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(raw),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || `HTTP error! Status: ${response.status}`);
            }

            localStorage.setItem("token", result?.token);
            setSuccess("Registration successful! Redirecting...");
            setTimeout(() => {
                window.location.href = "/";
            }, 1000);
        } catch (error) {
            console.error("Error:", error);
            setError(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            handleRegister();
        } else {
            handleLogin();
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>{isRegister ? "Create Account" : "Welcome Back"}</h2>
                <p style={styles.subtitle}>
                    {isRegister ? "Join us to manage your wood collection" : "Sign in to access the dashboard"}
                </p>

                {error && <div style={styles.error}>{error}</div>}
                {success && <div style={styles.success}>{success}</div>}

                <form onSubmit={handleSubmit} style={styles.form}>
                    {isRegister && (
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={styles.input}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                    )}

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" style={styles.button}>
                        {isRegister ? "Sign Up" : "Sign In"}
                    </button>
                </form>

                <div style={styles.toggleText}>
                    {isRegister ? "Already have an account? " : "New to Mywood? "}
                    <span
                        onClick={() => {
                            setIsRegister(!isRegister);
                            setError(null);
                            setSuccess(null);
                        }}
                        style={styles.toggleLink}
                    >
                        {isRegister ? "Sign In" : "Create one here"}
                    </span>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: "40px 20px",
        borderRadius: "12px",
        fontFamily: "'Outfit', 'Inter', sans-serif"
    },
    card: {
        background: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        backdropFilter: "blur(4px)",
        borderRadius: "16px",
        padding: "40px 30px",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center",
        border: "1px solid rgba(255, 255, 255, 0.18)"
    },
    title: {
        margin: "0 0 10px 0",
        color: "#1e293b",
        fontWeight: "700",
        fontSize: "28px"
    },
    subtitle: {
        margin: "0 0 25px 0",
        color: "#64748b",
        fontSize: "14px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        textAlign: "left"
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    },
    label: {
        fontSize: "13px",
        fontWeight: "600",
        color: "#475569"
    },
    input: {
        padding: "10px 14px",
        borderRadius: "8px",
        border: "1px solid #cbd5e1",
        fontSize: "14px",
        outline: "none",
        transition: "border-color 0.2s"
    },
    button: {
        background: "#0f172a",
        color: "#ffffff",
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        fontSize: "15px",
        fontWeight: "600",
        cursor: "pointer",
        marginTop: "10px",
        transition: "background 0.2s"
    },
    error: {
        background: "#fee2e2",
        color: "#ef4444",
        padding: "10px",
        borderRadius: "8px",
        fontSize: "13px",
        marginBottom: "15px",
        fontWeight: "500",
        textAlign: "left"
    },
    success: {
        background: "#dcfce7",
        color: "#22c55e",
        padding: "10px",
        borderRadius: "8px",
        fontSize: "13px",
        marginBottom: "15px",
        fontWeight: "500",
        textAlign: "left"
    },
    toggleText: {
        marginTop: "20px",
        fontSize: "13px",
        color: "#64748b"
    },
    toggleLink: {
        color: "#3b82f6",
        fontWeight: "600",
        cursor: "pointer",
        textDecoration: "underline"
    }
};

export default Login;