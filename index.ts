import {ArrayUtil} from './array-util';

let a = "Uma nebulosa, também conhecida como nébula, é uma nuvem interestelar de poeira, hidrogênio, hélio e gases ionizados. Originalmente, nebulosa era o nome de qualquer corpo celeste difuso, incluindo galáxias além da Via Láctea. A Galáxia de Andrômeda, por exemplo, era atribuída como Nebulosa de Andrômeda (e galáxias espirais em geral como \"nebulosas espirais\") antes da verdadeira natureza das galáxias ser confirmada no início do século XX por Vesto Melvin Slipher, Edwin Hubble e outros.".split(' ');
let b = "Nebulosas são muitas vezes regiões de formações estrelares, como a Nebulosa da Águia. Essa nebulosa é retratada em uma das imagens mais famosas da NASA, os \"Pilares da Criação\". Nessas regiões a formação de gás, poeira e outros materiais amontoam-se para formar massas maiores, nas quais atraem mais massas, e eventualmente se tornarão maciças o suficiente para se tornarem estrelas. Os materiais remanescentes são acreditados formarem planetas, e outros objetos de sistemas planetários.".split(' ');

document.getElementById("first").append(ArrayUtil.intersection1(a,b).join(','));

document.getElementById("second").append(ArrayUtil.intersection2(a,b).join(','));

document.getElementById("third").append(ArrayUtil.intersection3(a,b).join(','));