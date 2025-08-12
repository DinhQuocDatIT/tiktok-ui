import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/cb5f6925d3e4fd254f835de5a78e684a~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=e8ad152b&x-expires=1755176400&x-signature=ZYL%2B3UntHYNaqQS9qvkMVmec9fc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my2" alt="hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen Van An
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
