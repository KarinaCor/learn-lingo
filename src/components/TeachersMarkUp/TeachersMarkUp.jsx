import { AboutTeacher } from './AboutTeacher';
import { Avatar } from '@mui/material';
// import { StyledBadge } from './StyledBadge';
import {
//   ButtonBookLesson,
//   ButtonRM,
//   ItemLevels,
  ItemTeacher,
//   ListLevels,
  ListTeacher,
  Wrapper,
  WrapperImg,
} from './TeachersMarkUp.styled';

export const TeachersMarkup = ({ item }) => {
    return (
      <>
        <ListTeacher>
          {item.map(
            ({
              name,
              surname,
              languages,
            //   levels,
              rating,
            //   reviews,
              price_per_hour,
              lessons_done,
              avatar_url,
              lesson_info,
              conditions,
              experience,
              id,
            }) => {
              return (
                <ItemTeacher key={id}>
                  <WrapperImg>
                    {/* <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                      variant="dot"
                    > */}
                      <Avatar
                        src={avatar_url}
                        alt={experience}
                        width="96"
                        height="96"
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    {/* </StyledBadge> */}
                  </WrapperImg>
                  <Wrapper>
                    <AboutTeacher
                      lessons_done={lessons_done}
                      rating={rating}
                      price_per_hour={price_per_hour}
                    //   favorite={favorite}
                      id={id}
                    //   authUser={authUser}
                    //   handelClick={handelClick}
                      name={name}
                      surname={surname}
                      languages={languages}
                      lesson_info={lesson_info}
                      conditions={conditions}
                    />
                    {/* {!visibility[id] && (
                      <ButtonRM
                        type="button"
                        onClick={() =>
                          setVisibility({ ...visibility, [id]: true })
                        }
                      >
                        Read more
                      </ButtonRM>
                    )}
                    {visibility[id] && (
                      <ReviewerComponent
                        experience={experience}
                        reviews={reviews}
                      />
                    )}
                    <ListLevels>
                      {levels.map((i, index) => (
                        <ItemLevels key={index}>
                          <p>{i}</p>
                        </ItemLevels>
                      ))}
                    </ListLevels>
                    {visibility[id] && (
                      <ButtonBookLesson
                        type="button"
                        onClick={() => onClickModal(id)}
                      >
                        Book trial lesson
                      </ButtonBookLesson>
                    )} */}
                  </Wrapper>
                </ItemTeacher>
              );
            }
          )}
        </ListTeacher>
        {/* {isOpen.open && isOpen.name === 'bookLesson' && (
          <ModalComponent onClose={closeModal}>
            <BookLesson teacher={teacher} />
          </ModalComponent>
        )}
        {isOpen.open && isOpen.name === 'notAuth' && (
          <ModalComponent onClose={closeModal}>
            <NotAuth />
          </ModalComponent>
        )} */}
      </>
    );
}
