export interface NavItem {
  id: string
  label: string
  icon: string
  href: string
}

export interface RevenueData {
  day: string
  amount: number
}

export interface OrderTimeData {
  name: string
  value: number
  color: string
}

export interface OrderData {
  day: string
  current: number
  previous: number
}

export interface FoodItem {
  id: string
  name: string
  price: number
  icon: string
}

export interface RatingMetric {
  label: string
  percentage: number
  color: string
}

export interface DashboardStats {
  revenue: {
    value: string
    change: number
    isPositive: boolean
    period: string
    data: RevenueData[]
  }
  orderTime: {
    period: string
    data: OrderTimeData[]
    highlight: {
      name: string
      time: string
      orders: string
    }
  }
  orders: {
    value: string
    change: number
    isPositive: boolean
    period: string
    data: OrderData[]
  }
  ratings: RatingMetric[]
  mostOrdered: FoodItem[]
}
