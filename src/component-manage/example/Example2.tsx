interface Person {
    name: string,
    imageId: string
}

// utills.js
export function getImageUrl(person: Person, size:string) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }

interface Props {
    person: Person,
    size: number
}

function Avatar({ person, size }: Props) {
    
    const imgSize = size > 90 ? 'b' : 's';
  return (
    <img
      className="avatar"
      src={getImageUrl(person, imgSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}