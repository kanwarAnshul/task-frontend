import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import MuiChip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { styled } from '@mui/material/styles'

import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded'
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded'

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Dashboard',
    description:
      'This item could provide a snapshot of the most important metrics or data points related to the product.',
    imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Mobile integration',
    description: 'This item could provide information about the mobile app version of the product.',
    imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
]

const Chip = styled(MuiChip)(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background: 'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: theme.palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: theme.palette.primary.dark,
        }),
      },
    },
  ],
}))

const tabContent = {
  AboutMe:
    'This is the About Me section. Here you can add content relevant to your introduction, background, etc. It’s essential to highlight your personal journey, key experiences, and what makes you unique in this section.',
  Experiences:
    'This section highlights your work experiences. You can list your jobs, roles, achievements, etc. Focus on your most impactful projects, key responsibilities, and how they’ve shaped your career growth over time.',
  Recommended:
    'In this section, you can provide recommended items, tips, or other valuable information. Share insights, resources, or strategies that have been particularly useful to you, and that can benefit others as well.',
}

function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature }) {
  if (!items[selectedItemIndex]) {
    return null
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: 'background.paper',
          color: 'text.primary',
        }}
      >
        <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 280,
            backgroundImage: 'var(--items-imageLight)',
            ...theme.applyStyles('dark', {
              backgroundImage: 'var(--items-imageDark)',
            }),
          })}
          style={
            items[selectedItemIndex]
              ? {
                  '--items-imageLight': items[selectedItemIndex].imageLight,
                  '--items-imageDark': items[selectedItemIndex].imageDark,
                }
              : {}
          }
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography gutterBottom sx={{ color: 'text.primary', fontWeight: 'medium' }}>
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  )
}

MobileLayout.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  selectedFeature: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.element,
    imageDark: PropTypes.string.isRequired,
    imageLight: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  selectedItemIndex: PropTypes.number.isRequired,
}

export { MobileLayout }

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0)
  const [activeButton, setActiveButton] = React.useState('AboutMe')
  const [selectedImage, setSelectedImage] = React.useState(null)
  const [isHovered, setIsHovered] = React.useState(false)

  // Inline styles for the component
  const style = {
    height: '10rem', // 40 units in Tailwind CSS
    width: '10rem', // 40 units in Tailwind CSS
    backgroundColor: '#64748b', // Slate color in Tailwind CSS
    borderRadius: '0.5rem', // Rounded-lg in Tailwind CSS
    transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
    boxShadow: isHovered
      ? '0 25px 50px rgba(0, 0, 0, 4.95)' // Custom shadow on hover
      : '0 10px 20px rgba(0, 0, 0, 0.25)', // Default shadow
    transform: isHovered ? 'rotate(-5deg)' : 'rotate(0deg)', // Rotation on hover
  }
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(URL.createObjectURL(file))
    }
  }

  const handleItemClick = (index) => {
    setSelectedItemIndex(index)
  }

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      // Handle the selected image file here, e.g., upload it or display it
      console.log('Selected file:', file)
    }
  }

  const selectedFeature = items[selectedItemIndex]

  return (
    <Container
      id="features"
      className="h-screen  "
      sx={{
        py: { xs: 8, sm: 16 },
        backgroundColor: '#282C31',
        color: 'common.white',
      }}
    >
      {/* <Box sx={{ width: { sm: '100%', md: '60%' } }}></Box> */}
      <Box
        className="h-[100vh]"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            <div className="w-[40vw] h-[40vh]  justify-start items-center shadow-xl shadow-black overflow-hidden bg-[#363C43] rounded-lg flex flex-col">
              <header className="cursor-pointer relative p-2 gap-5 my-10 mx-auto w-[38vw] rounded-3xl bg-black h-20 flex justify-around items-center">
                <div
                  className={`absolute transition-transform duration-300 ease-in-out transform ${
                    activeButton === 'AboutMe' ? 'translate-x-[-210px] shadow-2xl' : ''
                  } ${activeButton === 'Experiences' ? 'translate-x-0' : ''} ${
                    activeButton === 'Recommended' ? 'translate-x-[210px]' : ''
                  } w-[13vw] h-14 flex justify-center items-center font-bold text-white bg-[#28292F] shadow-4xl rounded-3xl`}
                >
                  {activeButton === 'AboutMe' && 'About Me'}
                  {activeButton === 'Experiences' && 'Experiences'}
                  {activeButton === 'Recommended' && 'Recommended'}
                </div>
                <div
                  className="w-[13vw] flex justify-center items-center font-bold text-white bg-transparent hover:h-14 hover:bg-[#1c1c1f] hover:rounded-2xl active:rounded-lg"
                  onClick={() => handleButtonClick('AboutMe')}
                >
                  About Me
                </div>
                <div
                  className="w-[13vw] flex justify-center items-center font-bold text-white bg-transparent hover:h-14 hover:bg-[#1c1c1f] hover:rounded-2xl active:rounded-lg"
                  onClick={() => handleButtonClick('Experiences')}
                >
                  Experiences
                </div>
                <div
                  className="w-[13vw] flex justify-center items-center font-bold text-white bg-transparent hover:h-14 hover:bg-[#1c1c1f] hover:rounded-2xl active:rounded-lg"
                  onClick={() => handleButtonClick('Recommended')}
                >
                  Recommended
                </div>
              </header>

              <section className="w-[32vw] flex justify-center items-center p-5 overflow-y-auto">
                <p className="text-[#969696] font-normal text-xl mx-auto flex justify-center">
                  {tabContent[activeButton]}
                </p>
              </section>
            </div>
            <div className="flex justify-center items-center">
              <div className="h-[0.2rem]  w-[35vw] bg-[#3C3E43] shadow-2xl shadow-black rounded-2xl"></div>
            </div>
            <div className="w-[40vw] h-[40vh] justify-start items-center shadow-xl shadow-black overflow-hidden bg-[#363C43] rounded-lg flex flex-col">
              <header className="cursor-pointer relative p-2 gap-5 my-2 mx-auto w-[38vw] rounded-lg bg-transparent h-20 flex justify-between items-center">
                <div className="container">
                  <button className="bg-[#171717] h-16 rounded-2xl w-36 text-xl font-medium">Gallery</button>
                </div>
                <div className="container flex flex-row gap-5">
                  <input
                    type="file"
                    id="add-image-input"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  <label
                    htmlFor="add-image-input"
                    className="bg-[#41464D] cursor-pointer shadow-inner font-bold shadow-[#b3aeae] h-12 w-32 rounded-full flex justify-center items-center"
                  >
                    Add Image +
                  </label>
                  <div className="flex flex-row w-28 gap-5">
                    <div className="h-12 flex justify-center items-center w-14 shadow-2xl   shadow-[#c4c4c4] rounded-full bg-[#202224] hover:bg-slate-900 font-bold text-2xl">
                      &#8592;
                    </div>
                    <div className="h-12 flex justify-center items-center w-14 rounded-full shadow-2xl shadow-[#c4c4c4]  bg-[#202224] hover:bg-slate-900 font-bold text-2xl">
                      &#8594;
                    </div>
                  </div>
                </div>
              </header>

              <main
                className={`relative overflow-hidden h-[40vh] w-[40vw]   flex transition-transform duration-300 ease-in-out ${
                  isHovered ? 'scale-[1.018]' : 'scale-100'
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="justify-between items-center container flex flex-row gap-8 mx-auto">
                  <div
                    className="h-40 w-40 bg-slate-500 rounded-lg transition-transform mx-10 duration-200 hover:shadow-2xl hover:shadow-black ease-in-out transform hover:scale-y-125 hover:rotate-3 "
                    style={{ transition: 'transform 0.2s ease-in-out' }}
                  ></div>
                </div>
              </main>
            </div>
          </Box>

          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
      </Box>
      <div className="flex justify-center items-center">
        <div className="h-[0.2rem]  w-[35vw] bg-[#3C3E43] shadow-2xl shadow-black rounded-2xl"></div>
      </div>
    </Container>
  )
}
