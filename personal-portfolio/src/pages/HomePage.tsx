import React from 'react';

import LastProjectsSlider from '../components/ShortAbout';
import Hero from '../components/Hero';
import TypeHobbies from '../features/TypeHobbies';

const HomePage = () => (
    <>
        <div>
            <div>
                <Hero />
            </div>
            <div className='mt-10'>
                <div>
                    <h2 className="text-8xl font-thin"> About <br></br> me</h2>
                    <p className='mx-10 pt-5'> My name is Rosa Laura Carrillo. A Mexican girl who had always
                        been interested in drawing, design, and writing.
                        Since I was little, I have considered  myself a  multidisciplinary person.
                        Which did very hard to choose just one profession for the rest of my life.
                        The colors and words bring me peace and clarity and social work.
                        For this reason, I think I have found in  User Design/ User Experience (UX/UX)
                        and software development a place where I  can  solve problems and apply a good
                        design that help to make easier the day of the people.Also, I speak Spanish,
                        and I am  currently learning English, French and German.
                        I get mainly inspired by nature: especially the flowers, rocks, the ocean,
                        the entire universe, and plants. I love live at computers time.
                        Also, I am a very enthusiastic person with a keen eye for
                        detail, always willing to continue honing my
                        skills and acquiring others that complement my
                        professional growth, always supporting those
                        around me.
                        I am now looking for a full-time position in the
                        field of software development. </p>

                    <div></div>
                    <div>
                        <img height={200} src="https://i.pinimg.com/236x/83/92/69/8392697bc4c0a8beca08f032b7a99c9d.jpg" alt="" />
                    </div>
                    <div>
                        <button type="submit">Leer más</button>
                    </div>
                </div>
            </div>
            <div>
                <TypeHobbies text='creative developer' anotherText='the best' />
            </div>
            <div>
                <LastProjectsSlider />
            </div>
        </div>
    </>
);

export default HomePage;
