
import Axios1 from './UsingAxiosAndCard';
import MyButton from './rendringLists';
import MyButton1 from './button2';
import ChangeState from './UpdatingTheEvents';
import Event from './RespondingToEvents';
import './App.css';
import '@fontsource/inter';
import * as React from 'react';
import Button from '@mui/joy/Button';

import { useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';

import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Link from '@mui/joy/Link';
import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Checkbox from '@mui/joy/Checkbox';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Close from '@mui/icons-material/Close';
import Delete from '@mui/icons-material/Delete';
import Download from '@mui/icons-material/Download';
import InsertLink from '@mui/icons-material/InsertLink';
import Crop from '@mui/icons-material/Crop';




let buttonx ;
 if(false){
   buttonx = <MyButton />
 }else{
  buttonx =<MyButton1 />
 }
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}




function App() {
  return (
    <><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
</head><div>
        <Button variant="solid">Hello world</Button>
    </div>
    <CssVarsProvider>
      <ModeToggle />
      <Sheet variant="outlined">Welcome!</Sheet>
      <div className="center-form"> {/* Apply the center-form class */}
        <Sheet
          sx={{
            width: 200,
            py: 3,
            px: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
        >
          Welcome123!
        </Sheet>

        <div>
          <Typography level="h4" component="h1">
            Welcome!
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input   

            // ... other Input props
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            // ... other Input props
          />
        </FormControl>

        <Button sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
          Log in
        </Button>
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'right' }}
        >
          Don't have an account?
        </Typography>
      </div>
    </CssVarsProvider>

    <br/>
    
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, minmax(0, 1fr))',
          sm: 'auto repeat(4, minmax(0, 1fr))',
        },
        gap: 3,
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      <Typography level="body-sm" justifySelf="flex-end">
        Button:
      </Typography>
      <Button variant="solid" color="primary">
        Solid
      </Button>
      <Button variant="soft" color="primary">
        Soft
      </Button>
      <Button variant="outlined" color="primary">
        Outlined
      </Button>
      <Button variant="plain" color="primary">
        Plain
      </Button>
      <Typography level="body-sm" justifySelf="flex-end">
        Chip:
      </Typography>
      <Chip variant="solid" size="sm" color="primary">
        Solid
      </Chip>
      <Chip variant="soft" size="sm" color="primary">
        Soft
      </Chip>
      <Chip variant="outlined" size="sm" color="primary">
        Outlined
      </Chip>
      <Chip variant="plain" size="sm" color="primary">
        Plain
      </Chip>
      <Typography level="body-sm" justifySelf="flex-end">
        Checkbox:
      </Typography>
      <Checkbox variant="solid" defaultChecked label="Solid" />
      <Checkbox variant="soft" defaultChecked label="Soft" />
      <Checkbox variant="outlined" defaultChecked label="Outlined" />
      <Checkbox variant="plain" defaultChecked label="Plain" />
    </Box>

    <br/>

    <Box
      sx={{
        display: 'flex',
        width: '100%',
        py: 2,
        borderRadius: 'xs',
      }}
    >
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'var(--joy-palette-neutral-outlinedBorder)',
          alignSelf: 'center',
          maxWidth: '100%',
          minWidth: { xs: 220, sm: 360 },
          mx: 'auto',
          boxShadow: 'sm',
          borderRadius: 'md',
          overflow: 'auto',
        }}
      >
        <Sheet
          sx={{
            borderWidth: '0 0 1px 0',
            display: 'flex',
            alignItems: 'center',
            p: 2,
            borderBottom: '1px solid',
            borderColor: 'var(--joy-palette-neutral-outlinedBorder)',
          }}
        >
          <Typography level="h2" fontSize="md">
            Photo upload
          </Typography>
          <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: 'auto' }}>
            <Close />
          </IconButton>
        </Sheet>
        <Sheet sx={{ p: 2 }}>
          <Sheet
            variant="outlined"
            sx={{
              borderRadius: 'md',
              overflow: 'auto',
              borderColor: 'var(--joy-palette-neutral-outlinedBorder)',
              bgcolor: 'background.level1',
            }}
          >
            <AspectRatio>
              <img alt="" src="Screenshot (390).png" />
            </AspectRatio>
            <Box
              sx={{
                display: 'flex',
                p: 1.5,
                gap: 1.5,
                '& > button': { bgcolor: 'background.surface' },
              }}
            >
              <IconButton
                color="danger"
                variant="plain"
                size="sm"
                sx={{ mr: 'auto' }}
              >
                <Delete />
              </IconButton>
              <IconButton color="neutral" variant="outlined" size="sm">
                <Download />
              </IconButton>
              <IconButton color="neutral" variant="outlined" size="sm">
                <InsertLink />
              </IconButton>
              <IconButton color="neutral" variant="outlined" size="sm">
                <Crop />
              </IconButton>
            </Box>
          </Sheet>
        </Sheet>
        <Sheet
          sx={{
            display: 'flex',
            p: 2,
            borderTop: '1px solid',
            borderColor: 'var(--joy-palette-neutral-outlinedBorder)',
            gap: 1,
          }}
        >
          <Button size="md" variant="plain" sx={{ ml: 'auto' }}>
            Replace photo
          </Button>
          <Button size="md">Upload</Button>
        </Sheet>
      </Box>
    </Box>
<br/>
{buttonx}
<MyButton1/>
<MyButton/>
<Event/>
<br/>
<ChangeState/>
<br/>
<Axios1/>
    </>
  );
}

export default App;
