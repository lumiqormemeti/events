import { FC } from 'react';
interface EventCardDeleteProps {
  title: string;
  id: string;
  deleteHandler: () => void;
  cancelHandler: () => void;
}

const Modal: FC<EventCardDeleteProps> = ({
  title,
  id,
  deleteHandler,
  cancelHandler,
}) => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        <div className="w-full">
          <div className="m-8 my-20 max-w-[400px] mx-auto">
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-extrabold">
                Delete Events : {title}
              </h1>
              <p className="text-gray-600">
                Are you sure you want to delete this conference
              </p>
            </div>
            <div className="space-y-4">
              <button
                className="p-3 bg-black rounded-full text-white w-full font-semibold"
                onClick={deleteHandler}
              >
                Delete
              </button>
              <button
                className="p-3 bg-white border rounded-full w-full font-semibold"
                onClick={cancelHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
