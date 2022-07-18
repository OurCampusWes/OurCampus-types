# OurCampus-Types

## Types
<br/>

<details><summary>Department</summary>
<p>

```
  displayName: string  
  id: string  
  colors: string[]  
``` 
</p>
</details>

<details><summary>Section</summary>
<p>

```
  instructorName: string
  instructorUserName: string
  seatsAvail: number
```

</p>
</details>

<details><summary>Course</summary>
<p>

```
  crosslistings: string[]
  displayName: string
  link: string
  sections:  [key: string]: Section 
```

</p>
</details>

<details><summary>Dish</summary>
<p>

```
  subscribers: string[]
  isVegetarian: boolean
  isGlutenFree: boolean
  isVegan: boolean
  uid: number
  title: string
  lastSeen: string
  description: string
```

</p>
</details>

<details><summary>Event</summary>
<p>

```
  imageURL: string
  invited: string[]
  endDateTime: string
  joined: null[]
  title: string
  location: string
  description: string
  startDateTime: string
  public: boolean
  category: number
  dateTimePosted: string
  author: string
  flagged: null[]
  dateTimeEdited: string
```

</p>
</details>

<details><summary>Menu</summary>
<p>

```
  displayName: string
  fixedMenu: unknown[]
  snippet: string
  shortDisplayName: string
  imageURL: string
  menu: Dish[]
  fallbackURL: string
  hours: unknown
```

</p>
</details>

<details><summary>Organization</summary>
<p>

```
  contact: string
  dateTimePosted: string
  author: string
  description: string
  link: string
  displayName: string
  label: string
  events: string[]
  subscribers: string[]
  media: string[]
  imageURL: string
  dateTimeEdited: string
```

</p>
</details>

<details><summary>Review</summary>
<p>

```
  quality: number
  grade: string
  course: string
  comment: string
  string: string
  recommended: boolean
  difficulty: number
  likes: string[]
  author: string
  tags: number[]
```

</p>
</details>

<details><summary>Professor</summary>
<p>

```
  displayName: string
  averageDifficulty: number
  imageURL: string
  departments: string[]
  averageQuality: number
  totalReviews: number
  reviews:  [key: string]: Review 
```

</p>
</details>

<details><summary>User</summary>
<p>

```
  token: string
  incognito: boolean
  email: string
  os: string
  group: string
  directory: string
  imageURL: string
  blocked: boolean
  displayName: string
```

</p>
</details>

<details><summary>TruncatedUser</summary>
<p>

```
  incognito: boolean
  email: string
  group: string
  imageURL: string
  displayName: string
```

</p>
</details>

<details><summary>Notifications</summary>
<p>

```
  data: NotificationData
  viewed: boolean
  sender: string
  string: string
  type: number
```

</p>
</details>

<details><summary>NotificationData</summary>
<p>

```
  body: string
  restaurantId: string
  title: string
```

</p>
</details>

