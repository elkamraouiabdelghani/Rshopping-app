import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

function Accueil(){
    document.title = 'Accueil';

    const [nouveau, setNouveau] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/nouveauProduit")
        .then(result => setNouveau(result.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div className='p-0' style={{'backgroundColor': '#D9D9D9'}}>
            <Header />

            <div className='w-100 p-2'>
                <span className='mx-2'>Accueil</span>
            </div>

            <div className='container'>
                <div className='row mx-auto my-2'>
                    <div className='col-12 row p-1 border rounded bg-white mx-auto my-1'>
                        <span className='col-12 col-md-6 p-1'>
                            <Link to={'/homme'}>
                                <img className='w-100 rounded' src="./images/homme.jpeg" alt="" />
                            </Link>
                        </span>
                        <span className='col-12 col-md-6 p-1'>
                            <Link to={'/femme'}>
                                <img className='w-100 rounded' src="./images/femme.jpeg" alt="" />
                            </Link>
                        </span>
                    </div>
                    <div className='col-12 p-2 border rounded bg-white mx-auto'>
                        <span>
                            <Link to={'/enfant'}>
                                <img className='w-100 rounded' src="./images/enfant.jpeg" alt="" />
                            </Link>
                        </span>
                    </div>
                </div>

                <div className='row mx-auto my-2 mt-5 rounded p-3 d-flex justify-content-center'>
                    <div className='col-6 col-md-3 mb-4'>
                        <div className='w-100 mx-auto text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" fill="none">
                                <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="#000000" stroke-width="1.5"/>
                                <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="#000000" stroke-width="1.5"/>
                            </svg>
                            <span className='d-block fw-bold'>Expedition dans tout le Maroc</span>
                        </div>
                    </div>
                    <div className='col-6 col-md-3 mb-4'>
                        <div className='w-100 mx-auto text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" fill="none">
                                <path d="M3.5 18C3.5 16.5858 3.5 15.8787 3.93934 15.4393C4.37868 15 5.08579 15 6.5 15H7C7.94281 15 8.41421 15 8.70711 15.2929C9 15.5858 9 16.0572 9 17V22H3.5V18Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15 19C15 18.0572 15 17.5858 15.2929 17.2929C15.5858 17 16.0572 17 17 17H17.5C18.9142 17 19.6213 17 20.0607 17.4393C20.5 17.8787 20.5 18.5858 20.5 20V22H15V19Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 22H22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 16C9 14.5858 9 13.8787 9.43934 13.4393C9.87868 13 10.5858 13 12 13C13.4142 13 14.1213 13 14.5607 13.4393C15 13.8787 15 14.5858 15 16V22H9V16Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.6911 2.57767L13.395 3.99715C13.491 4.19475 13.7469 4.38428 13.9629 4.42057L15.2388 4.6343C16.0547 4.77141 16.2467 5.36824 15.6587 5.957L14.6668 6.95709C14.4989 7.12646 14.4069 7.4531 14.4589 7.68699L14.7428 8.925C14.9668 9.90492 14.4509 10.284 13.591 9.77185L12.3951 9.05808C12.1791 8.92903 11.8232 8.92903 11.6032 9.05808L10.4073 9.77185C9.5514 10.284 9.03146 9.90089 9.25543 8.925L9.5394 7.68699C9.5914 7.4531 9.49941 7.12646 9.33143 6.95709L8.33954 5.957C7.7556 5.36824 7.94358 4.77141 8.75949 4.6343L10.0353 4.42057C10.2473 4.38428 10.5033 4.19475 10.5993 3.99715L11.3032 2.57767C11.6872 1.80744 12.3111 1.80744 12.6911 2.57767Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className='d-block fw-bold'>Meilleur Qualite</span>
                        </div>
                    </div>
                    <div className='col-6 col-md-3 mb-4'>
                        <div className='w-100 mx-auto text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" fill="none">
                                <path d="M7.72852 15.2861H12.7285M10.2271 12.7861H10.2364M10.2294 17.7861H10.2388" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.5 3.69682C9.53332 6.78172 14.5357 0.123719 17.4957 2.53998C19.1989 3.93028 18.6605 7 16.4494 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M18.664 6.57831C19.6473 6.75667 19.8679 7.34313 20.1615 8.97048C20.4259 10.4361 20.5 12.1949 20.5 12.9436C20.4731 13.2195 20.3532 13.477 20.1615 13.687C18.1054 15.722 14.0251 19.565 11.9657 21.474C11.1575 22.1555 9.93819 22.1702 9.08045 21.5447C7.32407 20.0526 5.63654 18.366 3.98343 16.8429C3.3193 16.035 3.33487 14.8866 4.0585 14.1255C6.23711 11.9909 10.1793 8.33731 12.4047 6.31887C12.6278 6.1383 12.9012 6.02536 13.1942 6C13.6935 5.99988 14.5501 6.06327 15.3845 6.10896" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            <span className='d-block fw-bold'>Meilleur Offres</span>
                        </div>
                    </div>
                    <div className='col-6 col-md-3 mb-4'>
                        <div className='w-100 mx-auto text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" fill="none">
                                <path d="M11.9982 2C8.99043 2 7.04018 4.01899 4.73371 4.7549C3.79589 5.05413 3.32697 5.20374 3.1372 5.41465C2.94743 5.62556 2.89186 5.93375 2.78072 6.55013C1.59143 13.146 4.1909 19.244 10.3903 21.6175C11.0564 21.8725 11.3894 22 12.0015 22C12.6135 22 12.9466 21.8725 13.6126 21.6175C19.8116 19.2439 22.4086 13.146 21.219 6.55013C21.1078 5.93364 21.0522 5.6254 20.8624 5.41449C20.6726 5.20358 20.2037 5.05405 19.2659 4.75499C16.9585 4.01915 15.0061 2 11.9982 2Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.3371 10.3799C9.25714 10.3799 8.71714 11.1599 8.59714 11.6399C8.47714 12.1199 8.47714 13.8599 8.54914 14.5799C8.78914 15.4799 9.38914 15.8519 9.97714 15.9719C10.5171 16.0199 12.7971 16.0019 13.4571 16.0019C14.4171 16.0199 15.1371 15.6599 15.4371 14.5799C15.4971 14.2199 15.5571 12.2399 15.4071 11.6399C15.0891 10.6799 14.2971 10.3799 13.6971 10.3799H10.3371Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M10.25 9.95854C10.25 9.89854 10.2582 9.55312 10.2596 9.11854C10.2609 8.72145 10.226 8.33854 10.4156 7.98814C11.126 6.57454 13.166 6.71854 13.67 8.15854C13.7573 8.39562 13.7626 8.77146 13.76 9.11854C13.7567 9.56203 13.766 9.95854 13.766 9.95854" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            <span className='d-block fw-bold'>Paiements Securises</span>
                        </div>
                    </div>
                    <div className='col-6 col-md-3 mb-4'>
                        <div className='w-100 mx-auto text-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5Z" stroke="#000000" stroke-width="1.5"/>
                                    <path d="M9.5 17.5C9.5 18.8807 8.38071 20 7 20C5.61929 20 4.5 18.8807 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5Z" stroke="#000000" stroke-width="1.5"/>
                                    <path d="M14.5 17.5H9.5M15 15.5V7C15 5.58579 15 4.87868 14.5607 4.43934C14.1213 4 13.4142 4 12 4H5C3.58579 4 2.87868 4 2.43934 4.43934C2 4.87868 2 5.58579 2 7V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5M15.5 6.5H17.3014C18.1311 6.5 18.5459 6.5 18.8898 6.6947C19.2336 6.8894 19.4471 7.2451 19.8739 7.95651L21.5725 10.7875C21.7849 11.1415 21.8911 11.3186 21.9456 11.5151C22 11.7116 22 11.918 22 12.331V15C22 15.9346 22 16.4019 21.799 16.75C21.6674 16.978 21.478 17.1674 21.25 17.299C20.9019 17.5 20.4346 17.5 19.5 17.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.5 7V10.9998M10.5 7V10.9998" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            <span className='d-block fw-bold'>Livraison Gratuite</span>
                        </div>
                    </div>
                    <div className='col-6 col-md-3 mb-4'>
                        <div className='w-100 mx-auto text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" fill="none">
                                <path d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2H13.5C17.2712 2 19.1569 2 20.3284 3.17157C21.5 4.34315 21.5 6.22876 21.5 10V14C21.5 17.7712 21.5 19.6569 20.3284 20.8284C19.1569 22 17.2712 22 13.5 22H12C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z" stroke="#000000" stroke-width="1.5"/>
                                <path d="M9.79993 11.9741C9.37332 11.2302 9.16733 10.6228 9.04313 10.007C8.85943 9.09641 9.27981 8.20686 9.97622 7.63926C10.2706 7.39937 10.608 7.48133 10.782 7.79358L11.1749 8.49851C11.4864 9.05725 11.6421 9.33663 11.6112 9.63282C11.5803 9.929 11.3703 10.1702 10.9503 10.6527L9.79993 11.9741ZM9.79993 11.9741C10.6634 13.4797 12.0185 14.8356 13.5259 15.7001M13.5259 15.7001C14.2698 16.1267 14.8772 16.3327 15.493 16.4569C16.4036 16.6406 17.2931 16.2202 17.8607 15.5238C18.1006 15.2294 18.0187 14.892 17.7064 14.718L17.0015 14.3251C16.4427 14.0136 16.1634 13.8579 15.8672 13.8888C15.571 13.9197 15.3298 14.1297 14.8473 14.5497L13.5259 15.7001Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M5 6L2.5 6M5 12L2.5 12M5 18H2.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className='d-block fw-bold'>Contacte: 0909090909</span>
                        </div>
                    </div>
                </div>

                <div className='row mx-auto my-2'>
                    <div className='col-12 row p-1 border rounded bg-white mx-auto my-1'>
                        <span className='col-12 col-md-6 p-1'>
                            <Link to={'/homme/vetement'}>
                                <img className='w-100 rounded' src="./images/homme_vetement.png" alt="" />
                            </Link>
                        </span>
                        <span className='col-12 col-md-6 p-1'>
                            <Link to={'/femme/vetement'}>
                                <img className='w-100 rounded' src="./images/femme_vetement.jpg" alt="" />
                            </Link>
                        </span>
                    </div>
                </div>

                <div className='w-100 rounded my-4 bg-white'>
                    <div className='w-100 py-2 px-3 d-flex justify-content-between bg-secondary tete-courser'>
                        <span className='fw-bold'>Les derniers 6 nouvelles produits</span>
                    </div>
                    <div className='w-100 p-1'>
                        {
                            nouveau.length>0 ? (
                                <div className='row p-1 mx-1'>
                                    {
                                        nouveau.map((produit) => (
                                            <Link to={`/Produit/${produit._id}`} className='col-4 col-md-2 nouveauPro'>
                                                <img className='w-100' src={`http://localhost:3001/imagesProduit/${produit.image}`} alt="produit image" />
                                                <p>{produit.nom}</p>
                                            </Link>
                                        ))
                                    }
                                </div>
                            ) : (
                                <p>aucun nouvelle produit maintenet...</p>
                            )
                        }
                    </div>
                </div>

                <div className='row mx-auto my-2'>
                    <div className='col-12 row p-1 border rounded bg-white mx-auto my-1'>
                        <span className='col-12 col-md-6 p-1'>
                            <Link to={'/femme/chaussaure'}>
                                <img className='w-100 rounded' src="./images/femme_chaussaure.png" alt="" />
                            </Link>
                        </span>
                        <span className='col-12 col-md-6 p-1'>
                            <Link to={'/homme/chaussaure'}>
                                <img className='w-100 rounded' src="./images/homme_chaussaure.jpg" alt="" />
                            </Link>
                        </span>
                    </div>
                </div>

                <div className='w-100 rounded my-5 bg-white'>
                    <div className='w-100 py-2 px-3 d-flex justify-content-center bg-secondary tete-courser'>
                        <span className='fw-bold'>Vos marque preferer</span>
                    </div>
                    <div className='w-100 p-2'>
                        <p>aucun marque maintenet...</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Accueil;
