import Layout from 'components/Layout'


export default function Mypage() {
  return (
    <Layout>
      {/* 내 정보 */}
      <p className='text-lg mx-6 mb-2 font-semibold'>내 정보</p>

      <div className="mx-6 space-y-8">
        <section className="border-[0.25px] border-sub rounded-lg">

          <div className="flex flex-col mx-3 my-3">
            <div className="flex justify-center items-center w-16 h-16 rounded-lg border-[0.25px] border-sub">
              <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8447 15.4058C17.7107 15.4058 20.8447 12.2718 20.8447 8.40576C20.8447 4.53977 17.7107 1.40576 13.8447 1.40576C9.97873 1.40576 6.84473 4.53977 6.84473 8.40576C6.84473 12.2718 9.97873 15.4058 13.8447 15.4058Z" stroke="#FFA12E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25.8708 29.406C25.8708 23.988 20.4808 19.606 13.8448 19.606C7.20884 19.606 1.81885 23.988 1.81885 29.406" stroke="#FFA12E" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div className="border-[0.25px] border-sub rounded-lg w-full h-16 pl-2 mt-3">
              <p className='text-base mt-1'>최진영</p>
              <p className='text-xs mt-3'>한양대학교 (ERICA) 소프트웨어학부 19학번</p>
            </div>
          </div>
        </section>
      </div>

      {/* 개인 정보 변경 */}
      <p className='text-lg mx-6 mt-5 mb-2 font-semibold'>개인 정보 변경</p>

      <div className="mx-6 space-y-8">
        <section className="border-[0.25px] border-sub rounded-lg">

          <div className="flex flex-col mx-3 my-5">
            <a className="flex items-center mx-3 space-x-3">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.03857 7.46875V5.96875C4.03857 3.48625 4.73857 1.46875 8.23857 1.46875C11.7386 1.46875 12.4386 3.48625 12.4386 5.96875V7.46875" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.7388 16.4688H4.73877C1.93877 16.4688 1.23877 15.7188 1.23877 12.7188V11.2188C1.23877 8.21875 1.93877 7.46875 4.73877 7.46875H11.7388C14.5388 7.46875 15.2388 8.21875 15.2388 11.2188V12.7188C15.2388 15.7188 14.5388 16.4688 11.7388 16.4688Z" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.0361 11.9688H11.0424" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.2358 11.9688H8.24209" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.43502 11.9688H5.44131" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <p className="font-semibold">이메일 변경</p>
            </a>
            <a className="flex items-center mx-3 space-x-3 mt-5">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.63042 14.2696C9.63042 14.7273 9.33026 15.3276 8.94758 15.5602L7.88962 16.243C6.90667 16.8508 5.54104 16.168 5.54104 14.9524V10.9381C5.54104 10.4053 5.24091 9.72252 4.93327 9.34735L2.05193 6.31596C1.66926 5.93328 1.36914 5.25798 1.36914 4.80027V3.05947C1.36914 2.15156 2.05197 1.46875 2.88485 1.46875H12.8944C13.7273 1.46875 14.4101 2.15155 14.4101 2.98443V4.65019C14.4101 5.25797 14.0274 6.01582 13.6522 6.39099" stroke="#292D32" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.9436 12.3564C12.2697 12.3564 13.3447 11.2814 13.3447 9.9553C13.3447 8.62922 12.2697 7.5542 10.9436 7.5542C9.6175 7.5542 8.54248 8.62922 8.54248 9.9553C8.54248 11.2814 9.6175 12.3564 10.9436 12.3564Z" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.7948 12.807L13.0444 12.0566" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="font-semibold">관심분야 변경</p>
            </a>
          </div>
        </section>
      </div>

      {/* 이용안내 */}
      <p className='text-lg mx-6 mt-5 mb-2 font-semibold'>이용 안내</p>

      <div className="mx-6 space-y-8">
        <section className="border-[0.25px] border-sub rounded-lg">

          <div className="flex flex-col mx-3 my-5">
            <a className="flex items-center mx-3 space-x-3">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0011 13.5778H9.86446L6.37496 15.8988C5.85742 16.2438 5.15954 15.8753 5.15954 15.248V13.5778C2.80708 13.5778 1.23877 12.0094 1.23877 9.65698V4.95202C1.23877 2.59956 2.80708 1.03125 5.15954 1.03125H13.0011C15.3535 1.03125 16.9218 2.59956 16.9218 4.95202V9.65698C16.9218 12.0094 15.3535 13.5778 13.0011 13.5778Z" stroke="#292D32" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.07999 8.03357V7.86893C9.07999 7.33571 9.40936 7.0534 9.7387 6.82599C10.0602 6.60643 10.3817 6.32415 10.3817 5.8066C10.3817 5.08518 9.80141 4.50488 9.07999 4.50488C8.35857 4.50488 7.77832 5.08518 7.77832 5.8066" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.07654 9.9077H9.08359" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="font-semibold">문의하기</p>
            </a>

            <a className="flex items-center mx-3 space-x-3 mt-5">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.73877 8.90625C9.80984 8.90625 11.4888 7.22732 11.4888 5.15625C11.4888 3.08518 9.80984 1.40625 7.73877 1.40625C5.6677 1.40625 3.98877 3.08518 3.98877 5.15625C3.98877 7.22732 5.6677 8.90625 7.73877 8.90625Z" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.29639 16.4062C1.29639 13.5038 4.18391 11.1562 7.73891 11.1562" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.3888 15.9563C13.7143 15.9563 14.7888 14.8817 14.7888 13.5563C14.7888 12.2308 13.7143 11.1562 12.3888 11.1562C11.0633 11.1562 9.98877 12.2308 9.98877 13.5563C9.98877 14.8817 11.0633 15.9563 12.3888 15.9563Z" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.2388 16.4062L14.4888 15.6562" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="font-semibold">서비스 이용약관</p>
            </a>

            <a className="flex items-center mx-3 space-x-3 mt-5">
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.73877 16.4062C12.8638 16.4062 16.2388 13.0312 16.2388 8.90625C16.2388 4.78125 12.8638 1.40625 8.73877 1.40625C4.61377 1.40625 1.23877 4.78125 1.23877 8.90625C1.23877 13.0312 4.61377 16.4062 8.73877 16.4062Z" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.7361 8.90625H11.7429" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.73563 8.90625H8.74236" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.73465 8.90625H5.74139" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="font-semibold">개인정보 처리 방침</p>
            </a>
          </div>
        </section>
      </div>

      {/* 기타*/}
      <p className='text-lg mx-6 mt-5 mb-2 font-semibold'>기타</p>

      <div className="mx-6 space-y-8">
        <section className="border-[0.25px] border-sub rounded-lg mb-4">

          <div className="flex flex-col mx-3 my-5 ">
            <a className="flex items-center mx-3 space-x-3">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.89355 16.5181C13.0186 16.5181 16.3936 13.1431 16.3936 9.01807C16.3936 4.89307 13.0186 1.51807 8.89355 1.51807C4.76855 1.51807 1.39355 4.89307 1.39355 9.01807C1.39355 13.1431 4.76855 16.5181 8.89355 16.5181Z" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.89355 6.01807V9.76807" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.88916 12.0181H8.8959" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="font-semibold">정보 동의 설정</p>
            </a>

            <a className="flex items-center mx-3 space-x-3 mt-5">
              <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.848 13.7495H8.81934" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.28278 7.59401C6.20706 7.58644 6.1162 7.58644 6.03291 7.59401C4.23085 7.53344 2.7998 6.05696 2.7998 4.23976C2.7998 2.38469 4.299 0.87793 6.16163 0.87793C8.01669 0.87793 9.52346 2.38469 9.52346 4.23976C9.51588 6.05696 8.08484 7.53344 6.28278 7.59401Z" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.16181 15.8781C4.78377 15.8781 3.41329 15.5298 2.3684 14.8332C0.536054 13.6066 0.536054 11.6077 2.3684 10.3886C4.45061 8.99545 7.86544 8.99545 9.94765 10.3886" stroke="#292D32" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="font-semibold">회원 탈퇴</p>
            </a>

            <a className="flex items-center mx-3 space-x-3 mt-5">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1611 11.1945L16.5611 8.79453L14.1611 6.39453" stroke="#292D32" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.96094 8.79492H16.4953" stroke="#292D32" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.83594 16.2383C4.69219 16.2383 1.33594 13.4258 1.33594 8.73828C1.33594 4.05078 4.69219 1.23828 8.83594 1.23828" stroke="#292D32" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="font-semibold">로그아웃</p>
            </a>
          </div>

        </section>
      </div>
    </Layout>
  );
};