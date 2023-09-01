import Card from '../Card/Card';
import './FeaturedProducts.scss'
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({type}) => {

    const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    console.log(data)

    return ( 
        <div className='featuredProducts'>
             <div className="top">
                <h1>{type} products</h1>
                <p>Introducing a world where quality meets innovation. Our passion for delivering the best shines through in every product we offer. Explore the future of our {type} products with these exceptional choices:</p>
             </div>
             <div className="bottom">
                {   
                    error? "Something went wrong"
                    :loading? "loading"
                    : data?.map(item=><Card item={item} key={item.id}/>)}
             </div>
        </div>
     );
}
 
export default FeaturedProducts;