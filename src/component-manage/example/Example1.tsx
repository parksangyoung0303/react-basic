export function getImageUrl(imageId: string, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }
  
  interface Props {
    name: string;
    imageId: string;
    profession: string;
    awards: string[];
    discovered: string;
  }
  
  function Profile({
    name,
    imageId,
    profession,
    awards,
    discovered
  }: Props) {
  
    return (
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageId)}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b> 
            ({awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
    )
  }
  
  export default function Gallery() {
  
    const profiles: Props[] = [
      {
        name: 'Maria Skłodowska-Curie',
        imageId: 'szV5sdG',
        profession: 'physicist and chemist',
        awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
        discovered: 'polonium (chemical element)',
      },
      {
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2',
        profession: 'geochemist',
        awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
        discovered: 'a method for measuring carbon dioxide in seawater',
      }
    ]
  
    return (
      <div>
        <h1>Notable Scientists</h1>
        <Profile {...profiles[0]} />
        <Profile {...profiles[1]} />
      </div>
    );
  }