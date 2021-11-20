/** LIBRARY */
import React from 'react';
import { Hidden, Icon } from '@material-ui/core';
import { FuseScrollbars } from '@fuse';
import clsx from 'clsx';
import NavbarFoldedToggleButton from 'app/fuse-layouts/shared-components/NavbarFoldedToggleButton';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';
import { makeStyles } from '@material-ui/styles';
/** COMPONENTS */
import Logo from "app/fuse-layouts/shared-components/Logo";

const useStyles = makeStyles({
	content: {
		overflowX: 'hidden',
		overflowY: 'auto',
		'-webkit-overflow-scrolling': 'touch',
		// background: 'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 40px, 100% 10px',
		backgroundAttachment: 'local, scroll'
	}
});

function NavbarLayout1(props) {
	const classes = useStyles();

	return (
		<div className={clsx("flex flex-col h-full bg-white", props.className)}>
			<div className="flex flex-row items-center flex-shrink h-64 min-h-64 pl-12 pr-12">
				<Hidden mdDown>
					<NavbarFoldedToggleButton className="w-30 h-30 p-0" />
				</Hidden>

				<Hidden lgUp>
					<NavbarMobileToggleButton className="w-30 h-30 p-0">
						<Icon style={{ color: "black" }}>menu</Icon>
					</NavbarMobileToggleButton>
					<img style={{height: 32, paddingLeft: 16}} className={"self-center"} alt={"logos"} src={"/assets/images/logos/fourhorsemen.png"} />
				</Hidden>

				<Hidden mdDown>
					<Logo />
				</Hidden>
			</div>

			<FuseScrollbars className={clsx(classes.content)} >
				<Navigation layout="vertical" />
			</FuseScrollbars>
		</div>
	);
}

export default NavbarLayout1;


