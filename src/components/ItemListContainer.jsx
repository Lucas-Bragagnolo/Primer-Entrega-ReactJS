import './ItemListContainer.css';

export default function ItemListContainer({greeting}) {

    return (
        <main>
            <div className="itemListContainer">
                <h2>{greeting}</h2> 
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, rerum.</p>
                <button className='btn btn-primary'>Call to action</button>               
            </div>
        </main>
    )
}