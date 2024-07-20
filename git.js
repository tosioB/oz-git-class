// ----- 터미널 단축키 -  ctrl + ` ----- //


// ----- 전역에서 사용될 이름 설정 ----- //
git config --global user.name "GitHub 닉네임"


// ----- 전역에서 사용될 이메일 설정 ----- //
git config --global user.email "사용하는 이메일 주소 또는 GitHub 가입에 사용한 이메일"


// ----- 전역에 설정된 이름 설정 확인 ----- //
git config --global user.name


// ----- 전역에서 설정된  이메일 설정 확인 ----- //
git config --global user.email


// ----- 전역에 설정된 이름 삭제 ----- //
git config --global --unset user.name


// ----- 전역에 설정된 이메일 삭제 ----- //
git config --global --unset user.email


// ----- 저장소의 설정 전체 출력 ----- //
git config --list


// 로컬 저장소를 만들기 전 Git의 기본 브랜치를 master > main으로 변경한다.
// main으로 변경하는 이유는 master를 노예 역사의 잔재로 생각하고 있기 때문에 기본 Branch를 main으로 변경해서 사용한다.
// Window의 경우는 대부분 main으로 설정되어 있음(설치 시 선택할 수 있음)
// Mac의 경우는 master가 기본 설정되어 있는 경우가 많음
// ----- master에서 main으로 기본 브랜치를 변경 ----- //
git config --global init.defaultBranch main


// ----- 현재 작업 디렉토리의 상태를 보여준다. ----- //
git status


// ----- add ----- //
git add "파일명" // 지정한 파일을 Staging Area에 추가
git add . // 현재 작업 디렉토리 내의 모든 변경된 파일을 Staging Area에 추가


// ----- reset ----- //
git reset // 이전 커밋을 취소하거나 작업 트리와 Staging Area의 상태를 변경
git reset "파일명" // 지정된 파일의 Staging Area에서의 변경 사항을 취소하고, 이전 커밋 상태로 되돌리는 작업


// ----- rm --cached ----- //
git rm --cached "Stagin Area에 추가된 파일명" // Git에서 추적을 중단하고 Staging Area에서 파일을 제거



