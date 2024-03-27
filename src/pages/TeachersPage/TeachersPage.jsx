// import { TeachersMarkup } from 'components/TeachersMarkup/TeachersMarkup';
// import { Section } from 'components/TeachersMarkup/TeachersMarkup.styled';
// import { database } from '../../config/firebase-config';
// import { ref, child, get } from 'firebase/database';

// import { useEffect, useState } from 'react';
// import { Button } from './TeachersPage.styled';


// const TEACHERS_COLLECTION = 'teachers';
// const TEACHERS_PER_PAGE = 4;

// const TeachersPage = () => {
//   const [teachers, setTeachers] = useState([]);


//   const [count, setCount] = useState(TEACHERS_PER_PAGE);
//   const dbRef = ref(database);

//   useEffect(() => {
//     async function fetchTeachers() {
//       try {
//         const data = await get(child(dbRef, TEACHERS_COLLECTION));
//         if (data.exists()) {
//           setTeachers(data.val());
//         } else {
//           console.log('No data available for teachers');
//         }
//       } catch (error) {
//         console.error('Error fetching teachers:', error);
//       }
//     }
//     fetchTeachers();
//   }, [dbRef]);

//   const handleMoreButtonClick = () => {
//     if (count >= teachers.length) return;
//     setCount((prevCount) => prevCount + TEACHERS_PER_PAGE);
//   };

//   const limitedTeachers = teachers.slice(0, count);

//   return (
//     <Section>
//       {/* <Filter /> */}
//       {/* {filter.length === 0 && (
//           <>
//             <TeachersMarkup item={limitedTeachers} allTeacher={teachers} />
//             {count <= teachers.length && (
//               <Button type="button" onClick={handleMoreButtonClick}>
//                 More
//               </Button>
//             )}
//           </>
//         )} */}

//       <>
//         <TeachersMarkup item={limitedTeachers} allTeacher={teachers} />
//         {count <= teachers.length && (
//           <Button type="button" onClick={handleMoreButtonClick}>
//             More
//           </Button>
//         )}
//         <h1>hi</h1>
//       </>
//     </Section>
//   );
// };

// export default TeachersPage;

import { useEffect, useState } from 'react';

import { ref, child, get } from 'firebase/database';
import { TeachersMarkup } from 'components/TeachersMarkup/TeachersMarkup';
import { Section } from 'components/TeachersMarkup/TeachersMarkup.styled';
import { Button } from './TeachersPage.styled';
import { database } from '../../config/firebase-config';

const TEACHERS_COLLECTION = 'teachers';

const TEACHERS_PER_PAGE = 4;

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [count, setCount] = useState(TEACHERS_PER_PAGE);

  useEffect(() => {
    const dbRef = ref(database);

    async function fetchTeachers() {
      try {
        const data = await get(child(dbRef, TEACHERS_COLLECTION));
       console.log('Retrieved data:', data.val());
        if (data.exists()) {
          setTeachers(Object.values(data.val())); // Convert object to array
        } else {
          console.log('No data available for teachers');
        }
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    }

    fetchTeachers();
  }, []); // Removed dbRef from dependency array since it doesn't change

  const handleMoreButtonClick = () => {
    setCount((prevCount) => prevCount + TEACHERS_PER_PAGE);
  };

  const limitedTeachers = teachers.slice(0, count);

  return (
    <Section>
    
     
     
          <>
            <TeachersMarkup item={limitedTeachers} allTeacher={teachers} />
            {count <= teachers.length && (
              <Button type="button" onClick={handleMoreButtonClick}>
                More
              </Button>
            )}
          </>
       
     
    </Section>
  );
};

export default TeachersPage;

