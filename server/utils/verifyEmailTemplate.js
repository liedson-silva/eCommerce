const verifyEmailTemplate = ({ name, url }) => {
  return `
    <p>Prezado ${name},</p>
    <p>Obrigado por se cadastrar no eCommerce!</p>
    <a href="${url}" style="color: white; background: orange; margin-top: 10px; padding: 10px 20px; display: inline-block; text-decoration: none; border-radius: 5px;">
      Verificar e-mail
    </a>
  `;
};

export default verifyEmailTemplate;
