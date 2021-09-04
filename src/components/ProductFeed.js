import Product from "./Product";


function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense -mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        {products
            .slice(0, 4)
            .map(({ id, title, price, description, category, image }) => (
            <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />
            ))}

        <img
            className="md:col-span-full ml-4 transform hover:scale-105 transition duration-500 rounded-lg cursor-pointer"
            src="https://links.papareact.com/dyz"
            alt=""
        />

        <div className="md:col-span-2 xl:col-span-2">
            {products
            .slice(4, 5)
            .map(({ id, title, price, description, category, image }) => (
                <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}
        </div>

        {products
            .slice(5, 13)
            .map(({ id, title, price, description, category, image }) => (
            <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />
            ))}
        
        <div className="md:col-span-2 xl:col-span-2">
            {products
            .slice(13, 14)
            .map(({ id, title, price, description, category, image }) => (
                <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}
        </div>

        {products
            .slice(14, products.length)
            .map(({ id, title, price, description, category, image }) => (
            <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />
            ))}



        </div>


    );
}

export default ProductFeed;