import { Button } from 'flowbite-react';
import React from 'react';

type CardCategoryProps = {
    category: any;
};

const CardCategory = ({ category }: CardCategoryProps) => {
    return (
        <>
            {/* <Modal
              show={modalSubProduct}
              size='7xl'
              position='center'
              popup={true}
              onClose={onCloseSubproduct}
          >
              <Modal.Header className='bg-white' />
              <Modal.Body className='bg-white'>
                  <NewSubproduct onSubmit={onSubmitSubproduct} onCancel={onCloseSubproduct} />
              </Modal.Body>
          </Modal>
          <Modal
              show={modalUpdate}
              size='7xl'
              position='center'
              popup={true}
              onClose={onCloseUpdate}
          >
              <Modal.Header className='bg-white' />
              <Modal.Body className='bg-white'>
                  <NewProduct onCancel={onCloseUpdate} onSubmit={onCloseUpdate} />
              </Modal.Body>
          </Modal>
          <Modal
              show={modalDelete}
              size='xl'
              position='center'
              popup={true}
              onClose={onCancelDelete}
          >
              <Modal.Header className='bg-white' />
              <Modal.Body className='bg-white'>
                  <>
                      <div className='items-center text-center'>
                          <h1 className='text-2xl font-bold p-3'>Delete User</h1>
                          <span>
                              <h1>
                                  Do you want delete user with user email:
                                  ntt.thanhtrong@gmail.com
                              </h1>{' '}
                              You can't undo this action afterwards.
                          </span>

                          <div className='flex items-center justify-center gap-20 mt-10'>
                              <Button color='success' onClick={onCancelDelete}>
                                  Yes
                              </Button>
                              <Button color='failure' onClick={onCancelDelete}>
                                  No, cancel
                              </Button>
                          </div>
                      </div>
                  </>
              </Modal.Body>
          </Modal> */}
            <div className='w-[350px] shadow-xl bg-white m-2 rounded-2xl'>
                <img
                    className='h-[300px] w-full rounded-t-2xl'
                    src={
                        category.mediaLink !== 'https://google.com'
                            ? category.mediaLink
                            : 'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    alt=''
                />
                <div className='flex flex-col mt-3'>
                    <p className='bg-gray-c3 rounded-2xl px-2 mx-auto text-center'>
                        ID: {category.id}
                    </p>
                    <div className='ml-5'>
                        <p className='text-black font-semibold text-lg'>
                            Category Name: {category.name}
                        </p>
                        <p className=''>Gender: {category.gender}</p>
                        <p className=''>Deleted: {category.isDelete.toString().toUpperCase()}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center py-4 mt-3 flex-col'>
                    <div className='flex'>
                        <Button
                            color='light'
                            className='mx-2'
                            outline={false}
                            // onClick={onCloseUpdate}
                        >
                            Update
                        </Button>
                        <Button
                            outline={false}
                            color='failure'
                            className='mx-2'
                            // onClick={onCancelDelete}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardCategory;
