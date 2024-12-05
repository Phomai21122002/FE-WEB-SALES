import MenuCategory from '~/components/MenuCategory';
import MenuProduct from '~/components/MenuProduct';
import SliderImg from '~/components/SliderImg';
import { useStorage } from '~/Contexts';

function Home() {
    const { userData } = useStorage();
    return (
        <div className="max-w-[1100px] mx-auto px-8">
            <SliderImg />
            <MenuCategory />
            <MenuProduct title={'Tên Category'} />
        </div>
    );
}

export default Home;
