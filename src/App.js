import React, { useState, useEffect } from 'react';
import fetchData from 'services/api/sample.api';

const App = () => {

    // data: 상태 저장할 변수 / setData: 상태 저장 전용 함수
    const [data, setData] = useState(null);
    const apiUrl = '/api/hello';

    /**
     * @use useEffect(() => {...}, [apiUrl]);
     * @description useEffect 훅을 사용하여 컴포넌트가 렌더링될 때 한 번만 실행되도록 구성한다. 
     * 두 번째 매개변수로 [apiUrl]을 전달하여 apiUrl이 변경될 때마다 useEffect가 실행되도록 한다.
     */
    useEffect(() => {

        // 비동기 함수 fetchDataFromApi 정의
        const fetchDataFromApi = async () => {
            try {
                // 기존에 만들어 놓은 fetchData 모듈 사용해서 비동기로 데이터 가져옴
                const result = await fetchData(apiUrl);
                // 가져온 데이터로 상태 업데이트
                setData(result);

            } catch (error) {
                console.error('Error: ', error);
            }
        };

        // 정의한 fetchDataFromApi 실행
        fetchDataFromApi();

    }, [apiUrl]); // apiUrl이 변경될 때마다 useEffect 실행

    return (
        <div>
            {/* 데이터가 있으면 데이터를 화면에 출력하고 없으면 Loading... 표시 */}
            {
                data 
                ? (<div><h2>Data from API:</h2><pre>{data}</pre></div>) 
                : (<p>Loading...</p>)
            }
        </div>
    );
};

export default App;
