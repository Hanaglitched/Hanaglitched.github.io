$(document).ready(function () {
    $('.navbar').hover(function () {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.8)');
    }, function () {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.5)');
    });

    var characters = [
        {
            id: 'character-1',
            title: '자캐 3호',
            content: '자캐 3호입니다.',
            images: ['character-1-1.jpg', 'character-1-2.jpg']
        },
        {
            id: 'character-2',
            title: '자캐 1호',
            content: '자캐 1호입니다.',
            images: ['character-2-1.jpg']
        },
        {
            id: 'character-3',
            title: '자캐 2호',
            content: '자캐 2호입니다.',
            images: ['character-3-1.jpg']
        }
    ];

    var currentIndex = 0;
    var intervalId;
    var character;
    function showCharacter(index) {
        for (var i = 0; i < characters.length; i++) {
            $('#' + characters[i].id).hide();
        }
        $('#' + characters[index].id).show(500);
    }

    function nextCharacter() {
        currentIndex = (currentIndex + 1) % characters.length;
        showCharacter(currentIndex);
    }

    function prevCharacter() {
        currentIndex = (currentIndex + characters.length - 1) % characters.length;
        showCharacter(currentIndex);
    }

    function startSlideshow() {
        intervalId = setInterval(nextCharacter, 5000);
    }

    function stopSlideshow() {
        clearInterval(intervalId);
    }

    showCharacter(0);
    startSlideshow();

    $('.character').click(function () {
        stopSlideshow();

        var characterId = $(this).attr('id');
        for (var i = 0; i < characters.length; i++) {
            if (characters[i].id === characterId) {
                character = characters[i];
                break;
            }
        }

        $('#popup-title').text(character.title);
        $('#popup-content').text(character.content);
        $('#popup-image').attr('src', character.images[0]);
        $('.popup').show();
    });

    $('#left-button').click(function () {
        var currentImage = $('#popup-image').attr('src');
        for (var i = 0; i < character.images.length; i++) {
            if (character.images[i] === currentImage) {
                $('#popup-image').attr('src', character.images[(i + character.images.length - 1) % character.images.length]);
                break;
            }
        }
    });

    $('#right-button').click(function () {
        var currentImage = $('#popup-image').attr('src');
        for (var i = 0; i < character.images.length; i++) {
            if (character.images[i] === currentImage) {
                $('#popup-image').attr('src', character.images[(i + 1) % character.images.length]);
                break;
            }
        }
    });

    $('#close-button').click(function () {
        $('.popup').hide();
        startSlideshow();
    });

    $('.character').hover(
        function () {
            $(this).animate({
                width: '+=10px',
                height: '+=10px'
            }, 200);
        },
        function () {
            $(this).animate({
                width: '-=10px',
                height: '-=10px'
            }, 200);
        }
    );

    $('#navbar a').hover(
        function () {
            $(this).animate({
                color: '#333'
            }, 200);
        },
        function () {
            $(this).animate({
                color: '#999'
            }, 200);
        }
    );
    $('.right-button').click(function() {
        $('.character').hide();
        currentIndex = (currentIndex + 1) % 3;
        $('.character').eq(currentIndex).show(500);
      });
    
      $('.left-button').click(function() {
        $('.character').hide();
        currentIndex = (currentIndex - 1 + 3) % 3;
        $('.character').eq(currentIndex).show(500);
      });
});
