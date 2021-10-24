const express = require('express');
const serverless = require('serverless-http');
const cors = require("cors");

const app = express();

const router = express.Router();
app.use(cors());




router.get('/massari-tours', (req,res) => {
    res.json([
      {
        id: "rec6d6T3q5EBIdCfD",
        name: "O melhor de São Luís em um tour de 7 dias",
        info: "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá.",
        image:
          "https://content.r9cdn.net/rimg/dimg/56/1b/36666c93-city-48350-172c06024b3.jpg?width=1750&height=1000&xhint=3350&yhint=1412&crop=true",
        price: "1,995",
      },
      {
        id: "recIwxrvU9HfJR3B4",
        name: "Lençóis Maranhenses em 14 dias",
        info: "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá.",
        image:
          "https://eventos.casablancaturismo.com.br/image/Fotos%20Len%C3%A7%C3%B5es%20Maranhense/melhor-epoca-para-visitar-os-lencois-maranhenses.jpg",
        price: "3,895",
      },
      {
        id: "recJLWcHScdUtI3ny",
        name: "O melhor de Atins em 7 dias",
        info: "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá.",
        image:
          "https://www.transportal.com.br/noticias/wp-content/uploads/2020/10/Hospedagem-em-Atins.jpg",
        price: "2,695",
      },
      {
        id: "recK2AOoVhIHPLUwn",
        name: "Carolina em um tour de 7 dias",
        info: "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá.",
        image:
          "https://www.carpemundi.com.br/wp-content/uploads/2017/12/po%C3%A7o-azul-chapada.jpg",
        price: "2,095",
      },
      {
        id: "receAEzz86KzW2gvH",
        name: "Morros, parque das cachoeiras em 7 dias",
        info: "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá.",
        image:
          "https://oimparcial.com.br/app/uploads/2020/03/WhatsApp-Image-2019-12-18-at-07.24.04-1.jpeg",
        price: "2,595",
      },
    ]);
})

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);