export const WHATSAPP_NUMERO = '5527992753921';

export const MENSAGENS = {
  padrao:
    'Olá, gostaria de informações sobre consulta com Dr. Bernardo Barroso, especialista em joelho, por favor. Fico no aguardo de um breve retorno.',
  ligamento:
    'Olá, gostaria de informações sobre consulta com Dr. Bernardo Barroso para avaliação de lesão do ligamento, por favor. Fico no aguardo de um breve retorno.',
  acido:
    'Olá, gostaria de informações sobre consulta com Dr. Bernardo Barroso para infiltração de ácido hialurônico no joelho, por favor. Fico no aguardo de um breve retorno.',
  protese:
    'Olá, gostaria de informações sobre consulta com Dr. Bernardo Barroso para avaliação de prótese de joelho, por favor. Fico no aguardo de um breve retorno.',
  convenios:
    'Olá, gostaria de saber se o Dr. Bernardo Barroso atende pelo meu convênio, por favor. Fico no aguardo de um breve retorno.',
};

export const WHATSAPP_MENSAGEM = MENSAGENS.padrao;

export function whatsappUrl(mensagem: string = MENSAGENS.padrao) {
  return 'https://api.whatsapp.com/send?phone=' + WHATSAPP_NUMERO + '&text=' + encodeURIComponent(mensagem);
}

export const WHATSAPP_URL = whatsappUrl();
