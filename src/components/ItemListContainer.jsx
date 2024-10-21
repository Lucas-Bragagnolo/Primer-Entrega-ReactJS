import './ItemListContainer.css';

export default function ItemListContainer({greeting}) {

    return (
        <main>
            <div className="itemListContainer">
                <h1>{greeting}</h1>                
            </div>
        </main>
    )
}