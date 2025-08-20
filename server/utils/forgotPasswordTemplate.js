const forgotPasswordTemplate = (name, otp) => {
  return `
    <div>
      <h1>Olá ${name},</h1>
      <p>Você solicitou a recuperação de senha. Use o seguinte código OTP para redefinir sua senha:</p>
      <h2>${otp}</h2>
      <p>Este código é válido por 1 hora.</p>
    </div>
  `;
}

export default forgotPasswordTemplate;
