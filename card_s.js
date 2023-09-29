

// Creation of class Card

export class Card {


        imgSrc = 'img/';
        imgExt = '.svg';
        imgBackCard = '1B';
        static maxZ = 2;

        mouseDown = false;
        
        constructor(suit, value, pos, zIndex, front)
        {
            this.cardUp = false;
            this.flippingcardElem
            this.cardInnerElem
            this.cardFrontImg
            this.suit = suit;
            this.value =  value;
            this.id = this.value.name + this.suit;
            this.startTime;
            this.player = undefined;
            (front === undefined) ? this.front = true : this.front = front;
            (zIndex === undefined) ? this.zIndex = 1 : this.zIndex = zIndex;
            if (Card.maxZ < zIndex) Card.maxZ = zIndex;
            this.offset = {x:pos.x, y:pos.y}
            this.mouseDown = false;
            this.mouseHover = false;
            this.isFlipping = false;
            this.isDragging = false;
            this.isDraggable = false;
            this.isOut = false;
            this.isFlippable = false;

            (pos === undefined) ? this.pos = {x: 0, y: 0} : this.pos = {x: pos.x, y: pos.y};

        }
        
        changeCard(suit, value)
        {
          this.suit = suit;
          this.value =  value;
        }

        
        getKey()
        {
          return this.value;
        }

        flipCard(front)
        {
          this.front = !  front;
        }

        changePosition(pos)
        {
          this.pos = pos;         
        }
        
        getPosition()
        {
          return this.pos;
        }

        assign(card)
        {
          this.suit = card.suit;
          this.value =  card.value;
          this.id = card.id;
          this.front = card.front;
          this.zIndex = card.zIndex;
          this.pos = card.pos;
        }

        setzIndex()
        {
          if (this.zIndex < Card.maxZ)
              this.zIndex = ++Card.maxZ; 
        }

        
        getMaxZ()
        {
            return Card.maxZ;
        }
    }


