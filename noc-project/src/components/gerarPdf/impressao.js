
export class Impressao {


  constructor(dadosParaImpressao) {
    this.dadosParaImpressao = dadosParaImpressao;

    let valorTotal = 0;
    for (let i = 0; i < dadosParaImpressao.length; i++) {
        valorTotal += parseFloat(dadosParaImpressao[i].valorBoleto);
    }
  }  
  
  async PreparaDocumento() {
    const corpoDocumento = this.CriaCorpoDocumento();
    const documento = this.GerarDocumento(corpoDocumento);
    return documento;
  }

  CriaCorpoDocumento() {
    const header = [
      { text: 'Mês Chamado', bold: true, fontSize: 12, margin: [0, 4, 0, 0] },
      { text: 'Número Chamado', bold: true, fontSize: 12, margin: [0, 4, 0, 0] },
      { text: 'Valor Boleto', bold: true, fontSize: 12, margin: [0, 4, 0, 0] },
      { text: 'Técnico Chamado', bold: true, fontSize: 12, margin: [0, 4, 0, 0] },
      { text: 'Sistema', bold: true, fontSize: 12, margin: [0, 4, 0, 0] },

    ];
    const body = this.dadosParaImpressao.map((item) => {
      return [
        { text: item.mesChamado, fontSize: 12 },
        { text: item.numeroChamado, fontSize: 12 },
        { text: item.valorBoleto, fontSize: 12 },
        { text: item.tecnicoChamado, fontSize: 12 },
        { text: item.sistema, fontSize: 12 },

      
      ];
    });
   
   
    const lineHeader = [
      {
        text:
          '__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
        alignment: 'center',
        fontSize: 5,
        colSpan: 5,
        
      },
      {},
      {},
    ];

    let content = [header, lineHeader];
    content = [...content, ...body];
    return content;
  }
  
    GerarDocumento(corpoDocumento) {
      const documento = {
        pageSize: 'A4',
        pageMargins: [14, 53, 14, 48],
        header: function () {
          return {
              margin: [14, 12, 14, 0],
              layout: 'noBorders',
              table: {
                widths: ['*'],
                body: [                             
                  [
                    { text: `RELATÓRIO DE CHAMADOS`, style: 'reportName' }


                  ]              
                ],
              },
            };
        },
      content: [
        {
              layout: 'noBorders',
              table: {              
                headerRows: 1,
                widths: [ '*',100,100,100,100],
        
                body: corpoDocumento
              }
            },
      ],
      footer(currentPage, pageCount) {
            return {
              layout: 'noBorders',
              margin: [14, 0, 14, 22],
              table: {
                widths: ['auto'],
                body: [
                  [
                    {
                      text:
                        '_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
                      alignment: 'center',
                      fontSize: 5,
                    },
                  ],
                  [
                    [
                      {
                        text: `Página ${currentPage.toString()} de ${pageCount}`,
                        fontSize: 7,
                        alignment: 'right',
                        /* horizontal, vertical */
                        margin: [3, 0],
                      },
                      {
                        text: '© NOC TI | Sumicity 2021 ',
                        fontSize: 7,
                        alignment: 'center',
                      }
                    ],
                  ],
                ],
              },
            };
          },
      styles: {
        reportName: {
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [0, 4, 0, 0],
          color:'#145E7D',
        }
      },
      
    };
      return documento;
    }
  }