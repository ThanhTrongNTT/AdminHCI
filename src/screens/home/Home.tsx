import CardUser from '~/components/card/CardUser';
import { IconClient, IconGlobalUser, IconMoney, IconSale } from '~/components/icon/Icon';
import Widget from '~/components/widget/Widget';

const widgets = [
    { title: `TODAY'S MONEY`, content: '$53,00', percent: 55, icon: <IconMoney /> },
    { title: `TODAY'S USERS`, content: '2,300', percent: 3, icon: <IconGlobalUser /> },
    { title: `NEW CLIENTS`, content: '+3,462', percent: 2, icon: <IconClient /> },
    { title: `SALE`, content: '$103,430', percent: 5, icon: <IconSale /> },
    { title: `SALE`, content: '$103,430', percent: 5, icon: <IconSale /> },
];

const Home = () => {
    return (
        <>
            <div className='items-center'>
                {/* {widgets.map((widget, index) => (
                        <Widget
                            key={index}
                            title={widget.title}
                            content={widget.content}
                            percent={widget.percent}
                            icon={widget.icon}
                        />
                    ))} */}
                <p className='text-center font-bold text-3xl text-white mt-auto'>
                    CHÀO MỪNG BẠN ĐẾN VỚI GIAO DIỆN QUẢN LÝ CỬA HÀNG BÁN QUẦN ÁO ONLINE
                </p>
            </div>
        </>
    );
};

export default Home;
