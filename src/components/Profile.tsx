import user from '../assets/images/profile.png';
import downIcon from '../assets/icons/down.svg';

export const Profile = () => {
    return <div className="flex flex-row gap-[14px] my-auto">
        <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-[10px] my-auto">
                <p className="text-black text-[18px] font-semibold leading-[13px]">John Doe</p>
                <p className="text-[#4182EB] text-[14px] font-semibold leading-[12px]">Bank Manager</p>
            </div>
            <img alt="itemimage" src={user}/>
        </div>
        <img alt="itemimage" src={downIcon} className='w-[16px] my-auto'/>
    </div>
}