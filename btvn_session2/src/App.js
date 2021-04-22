import './App.css';
import ProductItem from './components/ProductItem';

function App() {
  return (
    <div className="App">
      <ProductItem name='Áo Phông Nữ Cổ Tròn' price='199.000đ' discount='60%' img='https://file.hstatic.net/1000209952/file/ao_phong_ke_tam_nu_2_grande.jpg'/>
      <ProductItem name='Áo Phông Nữ Kiểu Vặn Eo' price='299.000đ' discount='' img='https://i.pinimg.com/originals/cb/f3/08/cbf30871e744e3abe6d8edb4d7812e2e.jpg'/>
      <ProductItem name='Quần Jean Nam Cotton USA' price='599.000đ' discount='' img='https://hd1.hotdeal.vn/images/uploads/2015/08/18/170261/170261-ao-thun-nam-co-tim-body%20%283%29.jpg'/>
      <ProductItem name='Áo Sơ Mi Nam' price='399.000đ' discount='40%' img='https://file.hstatic.net/1000209952/file/ao_phong_ke_tam_nu_2_grande.jpg'/>
    </div>
  );
}

export default App;
