import * as React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
    { path: '/dashboard', text: 'Dashboard' },
    { path: '/playlists', text: 'Playlists' },
    { path: '/user', text: 'Users' },
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
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              Spotify Extended
            </DrawerHeader>

            <DrawerBody>
              {navigationLinks.map(({ path, text }) => (
                <Link to={path}>
                  <Button variant="ghost" w="100%" onClick={onClose}>
                    {text}
                  </Button>
                </Link>
              ))}
              <Button variant="ghost" w="100%" onClick={handleLogOut}>
                Log Out
              </Button>
            </DrawerBody>

            <DrawerFooter>
              <ColorModeSwitcher alignSelf="end" />
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;
