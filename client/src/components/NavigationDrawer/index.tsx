import * as React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  VStack,
  Link,
  Button,
  Spacer,
  DrawerHeader,
} from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars, FaGithub } from 'react-icons/fa';
import NavigationButton from './NavigationButton';
import { useAppDispatch } from '../../store/hooks';
import { resetAuthState } from '../../features/authSlice';
import ColorModeSwitcher from '../ColorModeSwitcher';

const NavigationDrawer = () => {
  const [, , removeCookie] = useCookies([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    removeCookie('accessToken');
    removeCookie('refreshToken');
    dispatch(resetAuthState());
    onClose();
  };

  const navigationLinks = [
    { path: '/home', text: 'Home', onClick: onClose },
    { path: '/playlists', text: 'Playlists', onClick: onClose },
    { path: '/user', text: 'Users', onClick: onClose },
  ];

  return (
    <>
      <IconButton
        size="lg"
        variant="ghost"
        onClick={onOpen}
        icon={<FaBars />}
        aria-label="Open App Drawer"
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} autoFocus={false}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              Spotify Extended
            </DrawerHeader>
            <DrawerBody>
              <VStack spacing={2}>
                {navigationLinks.map(({ path, text, onClick }) => (
                  <NavigationButton
                    path={path}
                    text={text}
                    handleClick={onClick}
                  />
                ))}
              </VStack>
            </DrawerBody>

            <DrawerFooter>
              <ColorModeSwitcher />
              <IconButton
                as={Link}
                href="https://github.com/patrick-du/spotify-extended"
                isExternal
                fontSize="lg"
                variant="ghost"
                icon={<FaGithub />}
                aria-label="Github Repo"
              />
              <Spacer />
              <Button as={RouterLink} to="/" onClick={handleLogOut}>
                Log Out
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;
