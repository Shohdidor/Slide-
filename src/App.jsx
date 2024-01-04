import React, { useRef, useState , useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';


// IMG  
import Logo from "/img/Logo Marry Jame.jpg"
import Woman from "/img/Без названия (37).jpeg"

// MUI 
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import More from '@mui/icons-material/MoreHorizTwoTone';

// Card 
import Card from './components/Card';
import { Card2 } from './components/Card';

// IMG 
import IMG1 from "/img/7 (1).png"
import IMG2 from "/img/27.png"
import IMG3 from "/img/240.png"

import IMG4 from "/img/Group 32.png"
import IMG5 from "/img/Group 116.png"

import Slide1 from "/img/Divan.jpg"
import Slide2 from "/img/Hotel.jpg"
import Slide3 from "/img/Bed.jpg"
import Slide4 from "/img/Neboskryb.jpg"
import Slide5 from "/img/Priroda.jpg"

import './App.css'
import Switcher from './components/Switcher'
import { useTranslation } from 'react-i18next'
import FileBase64 from 'react-file-base64';



function App ()  {

  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const [ lng , setLng ] = useState ( "en" )
  const { t , i18n } = useTranslation ()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
  return (
    <>
    {/* <FileBase64
        multiple={ true }
        onDone={ this.getFiles.bind(this) } /> */}


    <div className='dark:bg-[#252422] text-black dark:text-white h-auto overflow-hidden'>
      
      <div className='Fon'>

<div className='flex p-[10px] justify-around items-center '>
        <img src={Logo} alt="error" className='w-[110px]' />

        <ul className='hidden sm:flex sm:justify-around sm:w-[20%]'>
          <li>{t("Navbar.li1")}</li>
          <li>
            Icon
          {t("Navbar.li2")}
          </li>
        </ul>

      <Switcher />

      <select value={lng}
      onChange={(event) => { changeLanguage ( event . target . value )
      setLng (event.target.value)}}>
        <option value="en">Eng</option>
        <option value="ru">Rus</option>
      </select>
      <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </div>
  
    
      
      <Card h1={t("tema.h1")} p={t("tema.p")} span={t("tema.span")} btn={t("tema.btn")} />

      </div>

      <div className='dark:bg-[#151515] pb-[40px] sm:flex sm:justify-evenly sm:pt-[30px] sm:pr-[80px]'>
        <div className='text-center sm:text-left sm:mt-[50px]'>
          <h1 className='text-[25px] font-black pt-[10px] pb-[4px] sm:pl-[105px] sm:text-[50px] dark:text-orange-500 text-sky-500'>
            {t("section1.h1")}
          </h1>
          <h4 className='font-medium pb-[10px] text-[13px] sm:pl-[105px] sm:text-[20px]'>
          {t("section1.h4")}
          </h4>
          <p className=' text-left w-[80%] m-auto text-[13px] font-mono mb-[10px] sm:w-[70%] sm:text-[18px] sm:ml-[105px] dark:text-purple-500 text-orange-500'>
          {t("section1.p")}
          </p>
        </div>
        <div className='w-[70%] m-auto sm:w-[100%]'>
          <img src={Woman} alt="error" />
        </div>
      </div>

      <Card2 img1={IMG1} img2={IMG2} img3={IMG3}  h1={t("numer.7")} h2={t("numer.27")} h3={t("numer.240")}/>
     <div className='flex justify-center sm:mt-[40px]'>
      <Button variant="contained" size='small' className='dark:bg-slate-700' sx={{background:"red"}}>Contained</Button>
     </div>

     <div className='text-center mt-[20px]'>
      <h1 className='text-[30px] font-black mb-[5px] sm:text-[50px]'>
        {t("Object")}
      </h1>
      <p className='text-[20px] font-mono sm:mb-[50px]'>
        {t("obj")}
      </p>
     </div>

     
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <img src={Slide1} alt="error" /> 
        </SwiperSlide>
        <SwiperSlide> <img src={Slide2} alt="error" /> </SwiperSlide>
        <SwiperSlide> <img src={Slide3} alt="error" /> </SwiperSlide>
        <SwiperSlide> <img src={Slide4} alt="error" /> </SwiperSlide>
        <SwiperSlide> <img src={Slide5} alt="error" /> </SwiperSlide>
      </Swiper>

      <div className='dark:bg-[#101010] flex flex-wrap justify-center pt-[50px] sm:flex sm:justify-between sm:items-center sm:pb-[50px]'>
        <div className='w-[90%] sm:w-[38%] text-center sm:text-left'>
        <h1 className='text-[30px] font-black dark:text-red-600 pb-[10px] sm:text-[50px]'>
          {t("section3.h1")}
        </h1>
        <p className='text-[15px] pb-[20px]'>
          {t("section3.p")}
        </p>
        </div>
        
        <div className='w-[98%] text-center sm:text-left sm:w-[38%]'>
        <h1 className='text-[30px] font-black dark:text-red-600 pb-[10px] sm:text-[50px]'>
         {t("section3.h2")}
        </h1>
        <p className='text-[12px] pb-[20px] sm:text-[15px]'>
           {t("section3.p2")}
        </p>
        </div>

      </div>

      <h1 className='text-center text-[21px] font-black dark:text-orange-600 pt-[10px] pb-[20px]'>
        {t("section4.h1")}
      </h1>
      
      <Card2 img1={IMG4} img2={IMG4} img3={IMG5}  h1={t("numer.7")} h2={t("numer.27")} h3={t("numer.240")}/>
 
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <img src={Slide2} alt="error" /> </SwiperSlide>
        <SwiperSlide> <img src={Slide3} alt="error" /> </SwiperSlide>
        <SwiperSlide> <img src={Slide1} alt="error" /> 
        <SwiperSlide> <img src={Slide5} alt="error" /> </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide> <img src={Slide4} alt="error" /> </SwiperSlide>
        <br />
      </Swiper>


        


    </div>
    </>
  )
}

export default App
