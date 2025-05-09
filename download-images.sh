#!/bin/bash

# Create necessary directories
mkdir -p public/images

# Download hero image
curl -o public/images/golf-hero.jpg "https://cdn.pixabay.com/photo/2014/07/08/15/37/golf-386604_1280.jpg"

# Download golf club images
curl -o public/images/club1-1.jpg "https://cdn.pixabay.com/photo/2017/01/31/22/06/club-2027718_1280.jpg"
curl -o public/images/club1-2.jpg "https://cdn.pixabay.com/photo/2017/01/31/22/09/club-2027746_1280.jpg"
curl -o public/images/club1-3.jpg "https://cdn.pixabay.com/photo/2019/04/11/00/19/golf-4118996_1280.jpg"

curl -o public/images/club2-1.jpg "https://cdn.pixabay.com/photo/2021/11/27/15/34/golf-6827933_1280.jpg"
curl -o public/images/club2-2.jpg "https://cdn.pixabay.com/photo/2019/04/27/20/40/tee-4161360_1280.jpg"

curl -o public/images/club3-1.jpg "https://cdn.pixabay.com/photo/2013/03/21/15/53/golf-clubs-95989_1280.jpg"
curl -o public/images/club3-2.jpg "https://cdn.pixabay.com/photo/2013/03/21/15/50/golf-club-95976_1280.jpg"

curl -o public/images/club4-1.jpg "https://cdn.pixabay.com/photo/2019/04/11/00/20/golf-4118999_1280.jpg"

curl -o public/images/club5-1.jpg "https://cdn.pixabay.com/photo/2017/06/15/20/43/golf-clubs-2406763_1280.jpg"
curl -o public/images/club5-2.jpg "https://cdn.pixabay.com/photo/2019/05/10/16/38/golf-4193185_1280.jpg"

curl -o public/images/club6-1.jpg "https://cdn.pixabay.com/photo/2018/06/21/15/06/golf-3489284_1280.jpg"
curl -o public/images/club6-2.jpg "https://cdn.pixabay.com/photo/2016/03/09/13/08/golf-1246388_1280.jpg"

# Download user image
curl -o public/images/user.jpg "https://cdn.pixabay.com/photo/2015/07/20/12/57/ambassador-852766_1280.jpg"

echo "All images downloaded successfully!" 