import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import userApi from '~/api/user.api';
import CardUser from '~/components/card/CardUser';

function ListUser() {
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalElement, setTotalElement] = useState(0);
    const [totalPages, setTotalPages] = useState(2);
    const [isLoadData, setIsLoadData] = useState(true);
    const size = 4;
    const onPageChange = (currentPage: number) => {
        setPageNumber(currentPage);
        getAllUser(currentPage);
    };
    const getAllUser = (currentPage: number) => {
        setIsLoadData(false);
        const orders: string[] = [];
        const filter: string[] = [];
        const data = { orders, filter, size, totalElement, pageNumber: currentPage };
        userApi.getAllUser(data).then((res: any) => {
            setTotalElement(Number(res.result.page.totalElement));
            console.log(res);
            setUsers(res.result.data);
            setIsLoadData(true);
        });
    };
    const onUpdate = (id: string, values: any) => {
        const data = {
            id,
            ...values,
        };
        userApi.updateUser(data).then((res: any) => {
            if (res.result === null) {
                toast.error(res.message);
            } else {
                toast.success('Update User success!');
                getAllUser(pageNumber);
            }
        });
    };
    useEffect(() => {
        getAllUser(pageNumber);
    }, []);
    useEffect(() => {
        setTotalPages(Math.ceil(totalElement / size));
    }, [isLoadData]);
    return (
        <>
            <div className=''>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    {users.map((user: any, index) => (
                        <CardUser user={user} key={index} onUpdate={onUpdate} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ListUser;
