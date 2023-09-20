import CategoryItem from "../category-item/category-item.component";
import './category-menu.styles.css';

const CategoryMenu = ({categories}) => {
    return (
        <div className='category-menu-container'>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    );
}

export default CategoryMenu