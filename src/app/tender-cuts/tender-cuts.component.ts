import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addtocart, decrement, emptyCart, incrementValue, removeItem } from '../shared/store/counter.actions';

@Component({
  selector: 'app-tender-cuts',
  templateUrl: './tender-cuts.component.html',
  styleUrls: ['./tender-cuts.component.css']
})
export class TenderCutsComponent implements OnInit {

  cartItems:any
  cartProducts:any
  TotalCost:any = 0;

  constructor(private store: Store<{cart: any}>){
    this.cartItems = store.select('cart');
  }

  productCard:any = [];
  addToCartBtn:boolean = true

  ngOnInit(): void {

    const data = fetch("https://6548ea34dd8ebcd4ab23dfaf.mockapi.io/tendercuts").then((res)=>res.json()).then((data)=>{
      this.productCard = data.map((data:any)=>{
        return {...data,qty: 1, clicked:true}
      });
      console.log(this.productCard);
    });

    this.cartItems.subscribe((data:any) => {
      this.cartProducts = data.cart
    })
    
  }

  addToCart(cartData:any){


    this.productCard=this.productCard.map((item:any)=>{
      if(item.name===cartData.name){
        return {...item, clicked:false}
      }else{
        return item
      }
    });
    cartData.clicked = false;

    this.store.dispatch(addtocart({cartItem: cartData}));
    this.TotalCost = 0;
    this.cartProducts.map((val:any) => {
      this.TotalCost += parseInt(val.price)
    });
    console.log(this.cartProducts);
  }

  incQty(itemId:any){
    this.TotalCost += parseInt(itemId.price);
    this.store.dispatch(incrementValue({ itemId: itemId.name }));
    this.productCard=this.productCard.map((item:any)=>{
      if(item.name === itemId.name){
        const quantity=item.qty+1
        return {...item,qty:quantity}
      }else{
        return item
      }
    });
  }

  decQty(item2:any){
    this.TotalCost -= item2.price;
    if(item2.qty>0){
      this.store.dispatch(decrement({ itemname: item2.name }));
      // item2.qty -= 1
      this.productCard=this.productCard.map((item:any)=>{
        if(item.name === item2.name){
          const quantity=item.qty-1
          return {...item,qty:quantity}
        }else{
          return item
        }
      });
    };

    if(item2.qty<=1){
      // this.productCard=this.productCard.map((item:any)=>{
      //   if(item===item2){
      //     return {...item,clicked:false}
      //   }else{
      //     return item
      //   }
      // });
      this.store.dispatch(removeItem({cartitem: item2}));

      this.cartProducts = this.cartProducts.filter((item:any) => item.name !== item2.name);

      console.log(this.cartProducts);

      this.productCard=this.productCard.map((item:any)=>{
        if(item.name===item2.name){
          return {...item,qty: 1, clicked:true}
        }else{
          return item
        }
      });
      
      // item2.qty = 1;
    }
  }



  emptyCart(){
    this.cartProducts = [];
    this.store.dispatch(emptyCart());
    this.productCard = this.productCard.map((item:any)=>{
      return {...item,qty:1, clicked:true}
    })
  }


  whytendercuts:any = [
  {
    Image: "https://www.tendercuts.in/assets/tcuts-value/1.png",
    desc: "FRESHLY CUT AFTER ORDER",
    btn: "know more"
  },
  {
    Image: "https://www.tendercuts.in/assets/tcuts-value/2.png",
    desc: "FARM FRESH EVERYDAY",
    btn: "know more"
  },
  {
    Image: "https://www.tendercuts.in/assets/tcuts-value/4.png",
    desc: "SAFE & HEALTHY",
    btn: "know more"
  },
  {
    Image: "https://www.tendercuts.in/assets/tcuts-value/3.png",
    desc: "ANTIBIOTIC FREE",
    btn: "know more"
  },
  {
    Image: "https://www.tendercuts.in/assets/tcuts-value/5.png",
    desc: "LOCALLY PRODUCED",
    btn: "know more"
  }, 
]


// productCard: any = [
//   {
//     image: "https://assets.tendercuts.in/product/P/R/63c42955-a41b-45ce-98e1-cb7510eeac4f.jpg",
//     name: "Chicken Curry Cut (Skin Off) - 1 Kg",
//     pieces: "32 - 36 pieces",
//     Weight: "960 - 1000 Gms",
//     price: 279,
//     qty: 1,
//     clicked: true
//   },
//   {
//     image: "https://assets.tendercuts.in/product/S/F/9ed9bdc2-79da-4666-a09c-54593b6c1bad.webp",
//     name: "Prawns Medium - Deshelled & Deveined",
//     pieces: "35-45 Pieces",
//     Weight: "400 - 490 Gms",
//     price: 275,
//     qty: 1,
//     clicked: true
//   },
//   {
//     image: "https://assets.tendercuts.in/product/C/H/a6b6b1db-2b6b-4129-a557-fbd9811c8888.webp",
//     name: "Chicken Biryani Cut (Skin Off)",
//     pieces: "5 - 6 Pieces",
//     Weight: "480 - 500 Gms",
//     price: 149,
//     qty: 1,
//     clicked: true
//   },
// ]

CheckOutBlog: any = [
  {
    image: "https://tendercutsblog.files.wordpress.com/2022/09/new-marinades.jpg?w=1134&h=630",
    name: "Be Party-Ready With The All-New Tender",
    pageLink: "https://blog.tendercuts.in/2022/09/21/be-party-ready-with-the-all-new-tendercuts-marinades/"
  },
  {
    image: "https://tendercutsblog.files.wordpress.com/2022/09/know-your-meat.jpg?w=1134&h=630",
    name: "Know The Quality Of Meat You Buy...",
    pageLink: "https://blog.tendercuts.in/2022/09/09/know-the-quality-of-meat-you-buy-online-tendercuts/"
  },
  {
    image: "https://tendercutsblog.files.wordpress.com/2022/08/sea-food-thumbnail.jpg?w=1134&h=630",
    name: "Seafood Fishing Season In India",
    pageLink: "https://blog.tendercuts.in/2022/08/12/seafood-fishing-season-in-india/"
  },
]

}
