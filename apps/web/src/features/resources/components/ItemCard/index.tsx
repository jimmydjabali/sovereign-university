import { IoChevronDownOutline } from 'react-icons/io5';

import { cn } from '@sovereign-university/ui';

interface Props {
  expanded: number;
  setExpanded: (v: number) => void;
}

export const ItemCard = ({ expanded, setExpanded }: Props) => {
  const glossarysDatas = [
    {
      id: 1,
      name: 'Addresses',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      name: 'Addresses',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];
  return (
    <div className="flex w-full flex-col space-y-8">
      {glossarysDatas.map((glossary) => (
        <div
          className={cn(
            'bg-white rounded-xl w-full transition-all duration-200',
            expanded === glossary.id && 'h-auto min-h-[200px] ',
          )}
          key={'glossary-' + glossary.id}
          style={{ transition: 'all 0.5s ease' }}
        >
          <div className="relative flex w-auto flex-col space-y-2 p-5">
            <div className="flex w-min flex-col">
              <div className="flex w-auto flex-row items-end space-x-1">
                <span className="text-6xl font-semibold">
                  {glossary.name.slice(0, 1).toUpperCase()}
                </span>
                <span className="">
                  {glossary.name.slice(1, glossary.name.length).toUpperCase()}
                </span>
                <span className="w-5" />
              </div>
              <span className="h-[1px] w-auto bg-gray-800" />
            </div>

            <span className="w-10/12 text-sm md:w-11/12">
              {expanded === glossary.id
                ? glossary.description
                : glossary.description.slice(0, 300) + '...'}
            </span>

            <button
              className={cn(
                'btn absolute rounded-full text-white bg-orange-600 right-5 md:top-10 top-14 w-12 h-12 flex items-center',
                expanded === glossary.id && 'hidden',
              )}
              onClick={() => setExpanded(glossary.id)}
            >
              <IoChevronDownOutline className="mx-auto text-3xl" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
