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
            <div>
                <div className='grid grid-cols-4 auto-rows-auto gap-y-4'>
                    {widgets.map((widget, index) => (
                        <Widget
                            key={index}
                            title={widget.title}
                            content={widget.content}
                            percent={widget.percent}
                            icon={widget.icon}
                        />
                    ))}
                </div>
                {/* <div className='flex'>
                    <div className='bg-white w-[50%] p-5 rounded-2xl ml-8'>
                        <span className='text-base font-semibold p-3'>Sales overview</span>
                        <Chart options={options} type='bar' series={series} width='80%' />
                    </div>
                </div> */}
                {/* <div className='flex my-10'>
                    <div className='bg-white w-[50%] p-5 rounded-2xl ml-8'>
                        <span className='text-base font-semibold p-3'>Sales overview</span>
                        <Chart options={options} type='bar' series={series} width='80%' />
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Home;
