'use client'
import { deletePlaylistApi, getPlaylistApi } from "@/redux/actions/Campaign";
import { Button, Dropdown } from "antd"
import Image from "next/image"
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import CreatePlaylistModal from "./CreatePlaylistModal";
import toast from "react-hot-toast";
import RenamePlaylistModal from "./RenamePlaylistModal";

const AllPlaylist = () => {

    const [playlist, setPlaylist] = useState([])
    const [isPlaylistModalVisible, setIsPlaylistModalVisible] = useState(false)

    const [isRenameModalVisible, setIsRenameModalVisible] = useState(false);
    const [initialRenameValue, setInitialRenameValue] = useState('');
    const [initialPlaylistid, setInitialPlaylistid] = useState(null)
    const [isGetPlaylist, setIsGetPlaylist] = useState(false)


    useEffect(() => {
        getPlaylistApi({
            onSuccess: (res) => {
                if (res.data) {
                    setPlaylist(res.data)
                }
            },
            onError: (e) => {
                console.log(e)
            }
        })
        setIsGetPlaylist(false)
    }, [isGetPlaylist])


    const items = [
        {
            label: 'Delete',
            key: '1',
        },
        {
            label: 'Rename',
            key: '2',
        },
    ];
    const handleMenuClick = (key, playlistId) => {
        if (key === '1') {
            deletePlaylistApi({
                id: playlistId,
                onSuccess: (res) => {
                    if (res.error === false) {
                        const updatedPlaylist = playlist.filter((item) => item.id !== playlistId)
                        setPlaylist(updatedPlaylist)
                        toast.success('Deleted successfully')
                    }

                },
                onError: (e) => {
                    toast.error('Failed to delete')
                    console.log(e)
                }
            })
    
        } else if (key === '2') {
            setInitialPlaylistid(playlistId)
            const playlistToRename = playlist.find((item) => item.id === playlistId);
            const initialValue = playlistToRename.title
            setInitialRenameValue(initialValue);
            setIsRenameModalVisible(true);
        }
    }

    const menuProps = (playlistId) => ({
        items,
        onClick: (item) => handleMenuClick(item.key, playlistId),
    });

    const createPlaylist = () => {
        setIsPlaylistModalVisible(true)
    }
    const handleCreatePlaylistSuccess = (newPlaylist) => {
        setPlaylist([...playlist, newPlaylist]);
    };

    const handleRenameSuccess = (updatedPlaylist) => {
        setPlaylist((prevPlaylist) =>
            prevPlaylist.map((item) =>
                item.id === updatedPlaylist.id ? updatedPlaylist : item
            )
        );
        setIsRenameModalVisible(false);
        toast.success('Playlist renamed successfully');
    };

    return (
        <>
            <div className="container text-white">

                <div className="row">
                    <div className="col-12 col-xl-3 col-lg-4 col-sm-6 d-flex justify-content-center mus_cat_container">
                        <div className="playlist_container text-white" onClick={createPlaylist}>
                            <Image src='/playlist_icon.svg' alt='playlist-icon' width={51} height={37} />
                            <h5 className="m-0">Create Playlist</h5>
                        </div>
                    </div>
                    {
                        playlist.length > 0 && playlist.map((item, index) => (
                            <div key={index} className="col-12 col-xl-3 col-lg-4 col-sm-6 d-flex justify-content-center mus_cat_container">
                                <div className="card-container text-white">

                                    {
                                        item.music.length > 0 ? (
                                            <Image src={item?.music[0]?.album?.image} alt='playlist' className="rounded" width={200} height={200} />
                                        )
                                        :
                                        (
                                                <Image src='/Audio_hedphone.svg' alt='playlist' className="rounded" width={200} height={200} />
                                        )
                                    }
                                    
                                    
                                    <div className="d-flex align-items-center justify-content-between w-100">

                                        <div className="d-flex flex-column">
                                            <h6 className="m-0">{item.title}</h6>
                                            <p className="text-rec-pld">{item?.music?.length} Songs</p>
                                        </div>
                                        <div>
                                            <Dropdown menu={menuProps(item.id)} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                                                <Button className="plylist_drp_btn"><BsThreeDotsVertical /></Button>
                                            </Dropdown>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <CreatePlaylistModal show={isPlaylistModalVisible} onHide={() => setIsPlaylistModalVisible(false)} handleCreatePlaylistSuccess={handleCreatePlaylistSuccess} />
            <RenamePlaylistModal show={isRenameModalVisible} onHide={() => setIsRenameModalVisible(false)} initialRenameValue={initialRenameValue} initialPlaylistid={initialPlaylistid} handleRenameSuccess={handleRenameSuccess} setIsGetPlaylist={setIsGetPlaylist} />
        </>
    )
}

export default AllPlaylist