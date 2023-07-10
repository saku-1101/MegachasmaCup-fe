import {SvgComponent as AccountSvgComponent} from './AcountIcon/account'
import AccountSvgData from './AcountIcon/account.svg'
export function AccountSvg(colour: string = '#131338'): JSX.Element{
    return AccountSvgComponent(AccountSvgData, colour)
}


import {SvgComponent as LogoSvgComponent} from './Logo/logo'
import LogoSvgData from './Logo/logo.svg'
export function LogoSvg(colour: string = '#fff'){
    return LogoSvgComponent(LogoSvgData, colour)
}


import {SvgComponent as AddNoteSvgComponent} from './AddNoteIcon/note-icon'
import AddNoteSvgData from './AddNoteIcon/note-icon.svg'
export function AddNoteSvg(colour: string = '#131338'){
    return AddNoteSvgComponent(AddNoteSvgData, colour)
}


