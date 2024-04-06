
 /**
 * Códigos de status de resposta do Protocolo de Transferência de Hipertexto (HTTP).
 * @see {@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes}
 */
enum HttpStatusCode {

  /**
   * O servidor recebeu os cabeçalhos da solicitação e o cliente deve prosseguir para enviar o corpo da solicitação
   * (no caso de uma solicitação para a qual um corpo precisa ser enviado; por exemplo, uma solicitação POST).
   * Enviar um grande corpo de solicitação para um servidor após uma solicitação ter sido rejeitada por cabeçalhos inadequados seria ineficiente.
   * Para fazer com que um servidor verifique os cabeçalhos da solicitação, o cliente deve enviar Expect: 100-continue como um cabeçalho em sua solicitação inicial
   * e receber um código de status 100 Continue em resposta antes de enviar o corpo. A resposta 417 Expectation Failed indica que a solicitação não deve continuar.
   */
  CONTINUE = 100,

  /**
   * O solicitante pediu ao servidor para mudar de protocolo e o servidor concordou em fazê-lo.
   */
  SWITCHING_PROTOCOLS = 101,

  /**
   * Uma solicitação WebDAV pode conter muitas sub-solicitações envolvendo operações de arquivo, exigindo muito tempo para completar a solicitação.
   * Este código indica que o servidor recebeu e está processando a solicitação, mas ainda não há resposta disponível.
   * Isso impede que o cliente atinja o tempo limite e assuma que a solicitação foi perdida.
   */
  PROCESSING = 102,

  /**
   * Resposta padrão para solicitações HTTP bem-sucedidas.
   * A resposta real dependerá do método de solicitação usado.
   * Em uma solicitação GET, a resposta conterá uma entidade correspondente ao recurso solicitado.
   * Em uma solicitação POST, a resposta conterá uma entidade descrevendo ou contendo o resultado da ação.
   */
  OK = 200,

  /**
   * A solicitação foi atendida, resultando na criação de um novo recurso.
   */
  CREATED = 201,

  /**
   * A solicitação foi aceita para processamento, mas o processamento não foi concluído.
   * A solicitação pode ou não ser eventualmente atendida e pode ser recusada quando o processamento ocorrer.
   */
  ACCEPTED = 202,

  /**
   * DESDE HTTP/1.1
   * O servidor é um proxy de transformação que recebeu um 200 OK de sua origem,
   * mas está retornando uma versão modificada da resposta da origem.
   */
  NON_AUTHORITATIVE_INFORMATION = 203,

  /**
   * O servidor processou com êxito a solicitação e não está retornando nenhum conteúdo.
   */
  NO_CONTENT = 204,

  /**
   * O servidor processou com êxito a solicitação, mas não está retornando nenhum conteúdo.
   * Ao contrário de uma resposta 204, esta resposta requer que o solicitante redefina a visualização do documento.
   */
  RESET_CONTENT = 205,

  /**
   * O servidor está entregando apenas parte do recurso (serviço de bytes) devido a um cabeçalho de intervalo enviado pelo cliente.
   * O cabeçalho de intervalo é usado pelos clientes HTTP para permitir a retomada de downloads interrompidos,
   * ou dividir um download em vários fluxos simultâneos.
   */
  PARTIAL_CONTENT = 206,

  /**
   * O corpo da mensagem que segue é uma mensagem XML e pode conter vários códigos de resposta separados,
   * dependendo de quantas sub-solicitações foram feitas.
   */
  MULTI_STATUS = 207,

  /**
   * Os membros de uma associação DAV já foram enumerados em uma parte precedente da resposta (multistatus),
   * e não estão sendo incluídos novamente.
   */
  ALREADY_REPORTED = 208,

  /**
   * O servidor atendeu a uma solicitação de recurso,
   * e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual.
   */
  IM_USED = 226,

  /**
   * Indica várias opções para o recurso a partir do qual o cliente pode escolher (via negociação de conteúdo orientada por agente).
   * Por exemplo, este código poderia ser usado para apresentar várias opções de formato de vídeo,
   * para listar arquivos com diferentes extensões de nome de arquivo, ou para sugerir desambiguação de sentido de palavra.
   */
  MULTIPLE_CHOICES = 300,

  /**
   * Esta e todas as futuras solicitações devem ser direcionadas para o URI fornecido.
   */
  MOVED_PERMANENTLY = 301,

  /**
   * Este é um exemplo de prática da indústria que contradiz o padrão.
   * A especificação HTTP/1.0 (RFC 1945) exigia que o cliente executasse um redirecionamento temporário
   * (a frase original que descrevia era "Movido Temporariamente"), mas navegadores populares implementaram o 302
   * com a funcionalidade de um 303 Veja Outro. Portanto, o HTTP/1.1 adicionou os códigos de status 303 e 307
   * para distinguir entre os dois comportamentos. No entanto, algumas aplicações e estruturas da Web
   * usam o código de status 302 como se fosse o 303.
   */
  FOUND = 302,

  /**
   * DESDE HTTP/1.1
   * A resposta à solicitação pode ser encontrada em outro URI usando um método GET.
   * Quando recebido em resposta a um POST (ou PUT/DELETE), o cliente deve presumir que
   * o servidor recebeu os dados e deve emitir um redirecionamento com uma mensagem GET separada.
   */
  SEE_OTHER = 303,

  /**
   * Indica que o recurso não foi modificado desde a versão especificada pelos cabeçalhos de solicitação If-Modified-Since ou If-None-Match.
   * Nesse caso, não há necessidade de retransmitir o recurso, pois o cliente ainda tem uma cópia previamente baixada.
   */
  NOT_MODIFIED = 304,

  /**
   * DESDE HTTP/1.1
   * O recurso solicitado está disponível apenas por meio de um proxy, cujo endereço é fornecido na resposta.
   * Muitos clientes HTTP (como Mozilla e Internet Explorer) não lidam corretamente com respostas com este código de status, principalmente por razões de segurança.
   */
  USE_PROXY = 305,

  /**
   * Não mais usado. Originalmente significava "Solicitações subsequentes devem usar o proxy especificado."
   */
  SWITCH_PROXY = 306,

  /**
   * DESDE HTTP/1.1
   * Neste caso, a solicitação deve ser repetida com outro URI; no entanto, futuras solicitações ainda devem usar o URI original.
   * Ao contrário de como o 302 foi implementado historicamente, o método de solicitação não pode ser alterado ao reenviar a solicitação original.
   * Por exemplo, uma solicitação POST deve ser repetida usando outra solicitação POST.
   */
  TEMPORARY_REDIRECT = 307,

  /**
   * A solicitação e todas as solicitações futuras devem ser repetidas usando outro URI.
   * 307 e 308 paralelizam os comportamentos de 302 e 301, mas não permitem que o método HTTP seja alterado.
   * Portanto, por exemplo, enviar um formulário para um recurso redirecionado permanentemente pode continuar sem problemas.
   */
  PERMANENT_REDIRECT = 308,

  /**
   * O servidor não pode ou não irá processar a solicitação devido a um erro aparente do cliente
   * (por exemplo, sintaxe de solicitação malformada, tamanho muito grande, formatação inválida de mensagem de solicitação ou roteamento de solicitação enganoso).
   */
  BAD_REQUEST = 400,

  /**
   * Semelhante ao 403 Proibido, mas especificamente para uso quando a autenticação é necessária e falhou ou ainda não foi
   * fornecida. A resposta deve incluir um campo de cabeçalho WWW-Authenticate contendo um desafio aplicável ao
   * recurso solicitado. Veja autenticação de acesso básico e autenticação de acesso digest. 401 semanticamente significa
   * "não autenticado", ou seja, o usuário não tem as credenciais necessárias.
   */
  UNAUTHORIZED = 401,

  /**
   * Reservado para uso futuro. A intenção original era que este código pudesse ser usado como parte de algum tipo de
   * esquema de pagamento digital ou micro pagamento, mas isso não aconteceu, e este código não é geralmente usado.
   * A API de desenvolvedores do Google usa este status se um determinado desenvolvedor exceder o limite diário de solicitações.
   */
  PAYMENT_REQUIRED = 402,

  /**
   * A solicitação foi válida, mas o servidor está recusando a ação.
   * O usuário pode não ter as permissões necessárias para um recurso.
   */
  FORBIDDEN = 403,

  /**
   * O recurso solicitado não pôde ser encontrado, mas pode estar disponível no futuro.
   * Solicitações subsequentes pelo cliente são permitidas.
   */
  NOT_FOUND = 404,

  /**
   * Um método de solicitação não é suportado para o recurso solicitado;
   * por exemplo, uma solicitação GET em um formulário que requer que os dados sejam apresentados via POST, ou uma solicitação PUT em um recurso somente leitura.
   */
  METHOD_NOT_ALLOWED = 405,

  /**
   * O recurso solicitado é capaz de gerar apenas conteúdo não aceitável de acordo com os cabeçalhos Accept enviados na solicitação.
   */
  NOT_ACCEPTABLE = 406,

  /**
   * O cliente deve primeiro se autenticar com o proxy.
   */
  PROXY_AUTHENTICATION_REQUIRED = 407,

  /**
   * O servidor expirou esperando pela solicitação.
   * De acordo com as especificações HTTP:
   * "O cliente não produziu uma solicitação no tempo que o servidor estava preparado para esperar. O cliente PODE repetir a solicitação sem modificações a qualquer momento posterior."
   */
  REQUEST_TIMEOUT = 408,

  /**
   * Indica que a solicitação não pôde ser processada devido a um conflito na solicitação,
   * como um conflito de edição entre várias atualizações simultâneas.
   */
  CONFLICT = 409,

  /**
   * Indica que o recurso solicitado não está mais disponível e não estará disponível novamente.
   * Isso deve ser usado quando um recurso foi removido intencionalmente e o recurso deve ser purgado.
   * Ao receber um código de status 410, o cliente não deve solicitar o recurso no futuro.
   * Clientes como mecanismos de busca devem remover o recurso de seus índices.
   * A maioria dos casos de uso não exige que clientes e mecanismos de busca purguem o recurso, e um "404 Não encontrado" pode ser usado em vez disso.
   */
  GONE = 410,

  /**
   * A solicitação não especificou o comprimento de seu conteúdo, que é necessário pelo recurso solicitado.
   */
  LENGTH_REQUIRED = 411,

  /**
   * O servidor não atende a uma das precondições que o solicitante impôs à solicitação.
   */
  PRECONDITION_FAILED = 412,

  /**
   * A solicitação é maior do que o servidor está disposto ou capaz de processar. Anteriormente chamado de "Entidade de Solicitação Muito Grande".
   */
  PAYLOAD_TOO_LARGE = 413,

  /**
   * O URI fornecido foi muito longo para o servidor processar. Muitas vezes, o resultado de muitos dados sendo codificados como uma string de consulta de uma solicitação GET,
   * caso em que deve ser convertido em uma solicitação POST.
   * Chamado anteriormente de "URI de Solicitação Muito Longo".
   */
  URI_TOO_LONG = 414,

  /**
   * A entidade da solicitação tem um tipo de mídia que o servidor ou recurso não suporta.
   * Por exemplo, o cliente faz upload de uma imagem como image/svg+xml, mas o servidor exige que as imagens usem um formato diferente.
   */
  UNSUPPORTED_MEDIA_TYPE = 415,

  /**
   * O cliente solicitou uma parte do arquivo (serviço de bytes), mas o servidor não pode fornecer essa parte.
   * Por exemplo, se o cliente pediu uma parte do arquivo que está além do final do arquivo.
   * Chamado anteriormente de "Intervalo Solicitado Não Satisfatório".
   */
  RANGE_NOT_SATISFIABLE = 416,

  /**
   * O servidor não pode atender aos requisitos do campo de cabeçalho Expect da solicitação.
   */
  EXPECTATION_FAILED = 417,

  /**
   * Este código foi definido em 1998 como uma das piadas tradicionais de primeiro de abril da IETF, no RFC 2324, Protocolo de Controle de Panela de Café de Hipertexto,
   * e não se espera que seja implementado por servidores HTTP reais. O RFC especifica que este código deve ser retornado por
   * bules de chá solicitados para preparar café. Este status HTTP é usado como um easter egg em alguns sites, incluindo o Google.com.
   */
  I_AM_A_TEAPOT = 418,

  /**
   * A solicitação foi direcionada a um servidor que não pode produzir uma resposta (por exemplo, devido a reutilização de conexão).
   */
  MISDIRECTED_REQUEST = 421,

  /**
   * A solicitação estava bem formada, mas não pôde ser seguida devido a erros semânticos.
   */
  UNPROCESSABLE_ENTITY = 422,

  /**
   * O recurso que está sendo acessado está bloqueado.
   */
  LOCKED = 423,

  /**
   * A solicitação falhou devido a uma falha de uma solicitação anterior (por exemplo, um PROPPATCH).
   */
  FAILED_DEPENDENCY = 424,

  /**
   * O cliente deve mudar para um protocolo diferente, como TLS/1.0, dado no campo de cabeçalho Upgrade.
   */
  UPGRADE_REQUIRED = 426,

  /**
   * O servidor de origem exige que a solicitação seja condicional.
   * Destinado a evitar "o problema de 'atualização perdida', onde um cliente
   * GETs o estado de um recurso, o modifica e o PUTs de volta ao servidor,
   * enquanto isso, uma terceira parte modificou o estado no servidor, levando a um conflito."
   */
  PRECONDITION_REQUIRED = 428,

  /**
   * O usuário enviou muitas solicitações em um determinado período de tempo. Destinado a ser usado com esquemas de limitação de taxa.
   */
  TOO_MANY_REQUESTS = 429,

  /**
   * O servidor está relutante em processar a solicitação porque um dos campos de cabeçalho,
   * ou todos os campos de cabeçalho coletivamente, são muito grandes.
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,

  /**
   * Um operador de servidor recebeu uma demanda legal para negar o acesso a um recurso ou a um conjunto de recursos
   * que inclui o recurso solicitado. O código 451 foi escolhido como referência ao romance Fahrenheit 451.
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,

  /**
   * Uma mensagem de erro genérica, dada quando uma condição inesperada foi encontrada e nenhuma mensagem mais específica é adequada.
   */
  INTERNAL_SERVER_ERROR = 500,

  /**
   * O servidor não reconhece o método de solicitação, ou não tem a capacidade de atender à solicitação.
   * Geralmente isso implica disponibilidade futura (por exemplo, um novo recurso de uma API de serviço web).
   */
  NOT_IMPLEMENTED = 501,

  /**
   * O servidor estava atuando como um gateway ou proxy e recebeu uma resposta inválida do servidor upstream.
   */
  BAD_GATEWAY = 502,

  /**
   * O servidor está atualmente indisponível (porque está sobrecarregado ou em manutenção).
   * Geralmente, este é um estado temporário.
   */
  SERVICE_UNAVAILABLE = 503,

  /**
   * O servidor estava atuando como um gateway ou proxy e não recebeu uma resposta oportuna do servidor upstream.
   */
  GATEWAY_TIMEOUT = 504,

  /**
   * O servidor não suporta a versão do protocolo HTTP usada na solicitação.
   */
  HTTP_VERSION_NOT_SUPPORTED = 505,

  /**
   * A negociação transparente de conteúdo para a solicitação resulta em uma referência circular.
   */
  VARIANT_ALSO_NEGOTIATES = 506,

  /**
   * O servidor não consegue armazenar a representação necessária para concluir a solicitação.
   */
  INSUFFICIENT_STORAGE = 507,

  /**
   * O servidor detectou um loop infinito ao processar a solicitação.
   */
  LOOP_DETECTED = 508,

  /**
   * São necessárias extensões adicionais à solicitação para que o servidor a atenda.
   */
  NOT_EXTENDED = 510,

  /**
   * O cliente precisa se autenticar para obter acesso à rede.
   * Destinado a ser usado por proxies de interceptação usados para controlar o acesso à rede (por exemplo, "portais cativos" usados
   * para exigir acordo com os Termos de Serviço antes de conceder acesso completo à Internet via um hotspot Wi-Fi).
   */

  NETWORK_AUTHENTICATION_REQUIRED = 511
}

export default HttpStatusCode;